const express = require('express');
    const cors = require('cors');
    const fs = require('fs');
    const path = require('path');

    // Provider context, which contains necessary tools like axios and cheerio
    const { providerContext } = require('./dist/providerContext');

    const app = express();
    const port = process.env.PORT || 5000;

    app.use(cors());

    // Root URL to check if the server is running
    app.get('/', (req, res) => {
        res.send('<h1>Vega Backend API is live!</h1><p>You can now use the API endpoints.</p>');
    });

    // --- DYNAMIC API ROUTES (This will work for all providers automatically) ---

    // 1. API for Posts (Homepage/Search)
    // Example: /api/posts/vega?filter=
    // Example: /api/posts/uhd?searchQuery=avengers
    app.get('/api/posts/:provider', async (req, res) => {
        const { provider } = req.params;
        const { filter, page = 1, searchQuery } = req.query;

        try {
            const providerPath = path.join(__dirname, 'dist', provider, 'posts.js');

            if (!fs.existsSync(providerPath)) {
                return res.status(404).json({ error: `Provider '${provider}' not found.` });
            }

            const providerModule = require(providerPath);
            let data;

            if (searchQuery) {
                if (!providerModule.getSearchPosts) {
                    return res.status(400).json({ error: `Search is not supported by the '${provider}' provider.` });
                }
                console.log(`Searching for "${searchQuery}" on ${provider}`);
                data = await providerModule.getSearchPosts({
                    searchQuery,
                    page: parseInt(page),
                    providerContext,
                    signal: new AbortController().signal,
                });
            } else {
                if (!providerModule.getPosts) {
                    return res.status(400).json({ error: `getPosts function not found for '${provider}' provider.` });
                }
                console.log(`Fetching posts for ${provider} with filter: ${filter}`);
                data = await providerModule.getPosts({
                    filter: filter || '',
                    page: parseInt(page),
                    providerContext,
                    signal: new AbortController().signal,
                });
            }
            res.json(data);
        } catch (error) {
            console.error(`Error in /api/posts/${provider}:`, error.message);
            res.status(500).json({ error: 'Failed to fetch posts.' });
        }
    });

    // 2. API for MetaData (Movie/Series Details)
    // Example: /api/meta/vega?link=[encoded_link]
    app.get('/api/meta/:provider', async (req, res) => {
        const { provider } = req.params;
        const { link } = req.query;

        if (!link) return res.status(400).json({ error: 'The "link" query parameter is required.' });

        try {
            const providerPath = path.join(__dirname, 'dist', provider, 'meta.js');
            if (!fs.existsSync(providerPath)) {
                return res.status(404).json({ error: `Provider '${provider}' not found.` });
            }

            const providerModule = require(providerPath);
            console.log(`Fetching metadata for ${provider}`);
            
            const metaData = await providerModule.getMeta({
                link: decodeURIComponent(link),
                providerContext,
            });
            res.json(metaData);
        } catch (error) {
            console.error(`Error in /api/meta/${provider}:`, error.message);
            res.status(500).json({ error: 'Failed to fetch metadata.' });
        }
    });

    // 3. API for Stream Links
    // Example: /api/stream/vega?link=[encoded_link]
    app.get('/api/stream/:provider', async (req, res) => {
        const { provider } = req.params;
        const { link, type } = req.query;

        if (!link) return res.status(400).json({ error: 'The "link" query parameter is required.' });

        try {
            const providerPath = path.join(__dirname, 'dist', provider, 'stream.js');
            if (!fs.existsSync(providerPath)) {
                return res.status(404).json({ error: `Provider '${provider}' not found.` });
            }

            const providerModule = require(providerPath);
            console.log(`Fetching stream for ${provider}`);
            
            const streamLinks = await providerModule.getStream({
                link: decodeURIComponent(link),
                type: type || 'movie',
                providerContext,
                signal: new AbortController().signal,
            });
            res.json(streamLinks);
        } catch (error) {
            console.error(`Error in /api/stream/${provider}:`, error.message);
            res.status(500).json({ error: 'Failed to fetch stream links.' });
        }
    });

    // Start the server
    app.listen(port, '0.0.0.0', () => {
        console.log(`✅ Public API server is running and listening on http://0.0.0.0:${port}!`);
        console.log(`🌐 Access your API at: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
    });
    
