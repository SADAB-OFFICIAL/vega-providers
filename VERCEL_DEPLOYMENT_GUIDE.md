# 🚀 Vercel Pe Deployment Guide - Vega Providers API

## ✅ Step-by-Step Instructions (Hindi)

### Step 1: Vercel Account Banao (FREE)
1. [Vercel.com](https://vercel.com) pe jao
2. "Sign Up" button pe click karo
3. GitHub account se sign up karo (recommended)
4. Account ban gaya! Bilkul FREE hai

### Step 2: Vercel CLI Install Karo

**Terminal me ye command run karo:**
```bash
npm install -g vercel
```

### Step 3: Vercel Login Karo

**Terminal me ye command run karo:**
```bash
vercel login
```
- Apna email enter karo
- Email me verification link aayega
- Link pe click karke verify karo

### Step 4: Project Deploy Karo

**Is folder me jao jaha aapki files hai, phir ye commands run karo:**

```bash
# Pehle build karo
npm run build

# Ab Vercel pe deploy karo
vercel
```

### Step 5: Deployment Process

**Jab `vercel` command run karoge, ye questions aayenge:**

1. **"Set up and deploy?"** 
   - Press `Y` (Yes)

2. **"Which scope?"** 
   - Apna account select karo (Enter press karo)

3. **"Link to existing project?"** 
   - Press `N` (No) - kyunki ye naya project hai

4. **"What's your project's name?"** 
   - Koi bhi naam do (jaise: `vega-providers-api`)
   - Ya phir Enter press karo default naam ke liye

5. **"In which directory is your code located?"** 
   - Press Enter (current directory use hogi)

6. **"Want to override settings?"**
   - Press `N` (No)

### ✨ Ho Gaya Deploy!

Deploy hone ke baad aapko **URL milega** jo kuch aisa hoga:
```
https://vega-providers-api.vercel.app
```

**Ye URL:**
- ✅ Hamesha online rahega (24/7)
- ✅ Bilkul FREE hai
- ✅ Kabhi off nahi hoga
- ✅ Fast loading hai

---

## 🔄 Update Karne Ka Tarika

**Agar aap code me koi change karo aur dobara deploy karna ho:**

```bash
# Pehle build karo
npm run build

# Phir deploy karo
vercel --prod
```

**Bas itna hi! Aapka new version deploy ho jayega**

---

## 📝 Important Files (Already Created)

Maine ye files already bana di hain:

✅ **vercel.json** - Vercel configuration
✅ **package.json** - Updated with correct scripts
✅ **.vercelignore** - Unnecessary files exclude karne ke liye

---

## 🌐 API Endpoints Test Karo

**Deploy hone ke baad, apne URL ke saath ye endpoints test karo:**

### 1. Check if server is running:
```
https://your-url.vercel.app/
```

### 2. Get posts from a provider:
```
https://your-url.vercel.app/api/posts/vega?filter=/category/popular&page=1
```

### 3. Search posts:
```
https://your-url.vercel.app/api/posts/uhd?searchQuery=avengers&page=1
```

### 4. Get metadata:
```
https://your-url.vercel.app/api/meta/vega?link=https%3A%2F%2Fexample.com
```

### 5. Get stream links:
```
https://your-url.vercel.app/api/stream/vega?link=https%3A%2F%2Fexample.com&type=movie
```

---

## 🆘 Agar Koi Problem Aaye

### Problem: Vercel command not found
**Solution:**
```bash
npm install -g vercel
```

### Problem: Login nahi ho raha
**Solution:**
1. Email check karo
2. Verification link pe click karo
3. Phir se `vercel login` run karo

### Problem: Build fail ho raha hai
**Solution:**
```bash
# Pehle dependencies install karo
npm install

# Phir build karo
npm run build

# Phir deploy karo
vercel
```

### Problem: Deployment fail
**Solution:**
1. Check karo ki `dist/` folder ban gaya hai
2. Check karo ki `node_modules/` folder hai
3. Phir se deploy karo: `vercel --prod`

---

## 💰 Cost (Pricing)

**Vercel FREE Plan:**
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth per month
- ✅ Serverless functions
- ✅ Custom domains
- ✅ SSL certificate (HTTPS)

**Aapke liye bilkul FREE hai!**

---

## 📱 Mobile App Me Use Karna

**Jab Vercel se URL mil jaye, apne Vega mobile app me:**

1. `ExtensionManager.ts` file open karo
2. Base URL me apna Vercel URL daal do:
```typescript
private baseUrlTestMode = "https://your-url.vercel.app";
```

3. Done! Ab mobile app Vercel se data lega

---

## 🎉 Summary

**Bas 5 commands:**
```bash
npm install -g vercel    # Sirf pehli baar
vercel login            # Sirf pehli baar
npm run build          # Har deployment se pehle
vercel                 # Deploy karne ke liye
```

**Aur aapka server hamesha online rahega! 🚀**

---

## 📞 Support

Agar koi problem ho to:
1. Is guide ko firse padho
2. Terminal me error message dekho
3. Google pe search karo
4. Vercel docs padho: https://vercel.com/docs

**All the best! 🎊**
