import axios from "axios";
import { getBaseUrl } from "./getBaseUrl";
import { headers } from "./headers";
import * as cheerio from "cheerio";
import { hubcloudExtracter } from "./hubcloudExtractor";
import { gofileExtracter } from "./gofileExtracter";
import { superVideoExtractor } from "./superVideoExtractor";
import { gdFlixExtracter } from "./gdflixExtractor";
import { ProviderContext } from "./types";
import * as crypto from "crypto";

/**
 * Context for provider functions.
 * This context is used to pass common dependencies to provider functions.
 */

const Aes = {
  sha1: async (input: string): Promise<string> => {
    return crypto.createHash('sha1').update(input).digest('hex');
  }
};

const extractors = {
  hubcloudExtracter,
  gofileExtracter,
  superVideoExtractor,
  gdFlixExtracter,
};

export const providerContext: ProviderContext = {
  axios,
  getBaseUrl,
  commonHeaders: headers,
  Aes,
  cheerio,
  extractors,
};
