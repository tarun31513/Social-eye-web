# SocialEye - Quick Start Guide

## 🚀 Getting Started (Demo Version)

### Step 1: Login
1. Enter any email address (e.g., `yourname@company.com`)
2. Click "Sign In" or use social login buttons
3. Your profile will show the first part of your email as your name
   - Example: `john.doe@company.com` → Shows as "John Doe"

### Step 2: View Onboarding
- After login, an onboarding wizard will appear
- Walk through 4 steps to understand how SocialEye works
- You can skip anytime or revisit features later

### Step 3: Explore Dashboard
- See key metrics: mentions, sentiment, engagement
- View charts showing trends over time
- Click "How It Works" button for detailed system explanation

---

## 📱 Navigation Guide

### Pages Overview

| Page | What It Shows | Key Features |
|------|---------------|--------------|
| **Dashboard** | Overview of all metrics | Charts, trends, key numbers |
| **Mentions** | Real-time feed of posts | Filter by platform/sentiment |
| **Sentiment** | Emotion analysis | Positive/Neutral/Negative breakdown |
| **Competitors** | Comparison analysis | Your brand vs. competitors |
| **Alerts** | Notification settings | Set custom alert conditions |
| **Reports** | Generate analytics | Download PDF/CSV/Excel |
| **Integrations** | Platform connections | Connect social media accounts |
| **Settings** | Configuration | Profile, keywords, team, theme |

---

## 🔑 Key Concepts Explained

### Q: Why does it show "John Doe" when I login with my email?

**A:** The system extracts your name from your email address!

**How it works:**
```
Email: john.doe@company.com
       ↓
Extract: john.doe
       ↓
Split & Capitalize: John Doe
```

**Examples:**
- `sarah_jones@email.com` → "Sarah Jones"
- `mike.smith@company.com` → "Mike Smith"  
- `alex123@gmail.com` → "Alex123"

To see your actual name: Go to **Settings → Profile** and update it manually (in production version).

---

### Q: Why don't you ask for my Twitter ID?

**A:** Great question! Here's the complete explanation:

#### Current State (Demo):
- This is a **prototype/demonstration**
- No real connections to social media
- All data is simulated (from `/lib/mockData.ts`)
- No API calls are made

#### Production State (How It Would Work):

**1. OAuth Authentication Flow:**
```
You click "Connect Twitter"
       ↓
Redirected to twitter.com/oauth/authorize
       ↓
Login with YOUR Twitter credentials on Twitter.com
       ↓
Twitter asks: "Allow SocialEye to read your public data?"
       ↓
You click "Authorize"
       ↓
Twitter sends secure token back to SocialEye
       ↓
Your Twitter ID is automatically included in the token!
```

**2. What We Get Automatically:**
- ✅ Your Twitter User ID (from OAuth response)
- ✅ Your Twitter handle (e.g., @yourname)
- ✅ Permission to search for mentions
- ✅ Read access to public tweets

**3. What We DON'T Get:**
- ❌ Your Twitter password (never!)
- ❌ Ability to post on your behalf
- ❌ Access to private DMs
- ❌ Your email (unless you grant it)

**4. Why OAuth is Better Than Asking for ID:**
- **Secure**: No passwords shared
- **Automatic**: Twitter provides ID in token
- **Revocable**: You can disconnect anytime
- **Standard**: Used by all major platforms

---

### Q: How does the system know what to monitor?

**A:** You tell it! Here's the process:

**Step 1: Connect Platforms**
- Go to **Integrations** page
- Click "Connect" on Twitter, Reddit, etc.
- Authorize access (OAuth)

**Step 2: Set Keywords**
- Go to **Settings → Keywords**
- Add your brand terms:
  - `@YourBrand` (Twitter mentions)
  - `#YourBrand` (Hashtags)
  - `YourBrand Inc.` (General mentions)
  - `YourProduct` (Product names)

**Step 3: Add Competitors** (Optional)
- Add competitor names to track:
  - `@CompetitorA`
  - `Competitor B Inc.`

**Step 4: System Automatically Monitors**
- Backend searches every 5-15 minutes
- Finds any posts containing your keywords
- AI analyzes sentiment
- Updates your dashboard

**Example Search Query:**
```
Twitter API Search:
"@YourBrand OR #YourBrand OR 'YourBrand Inc.'"

Returns:
- All tweets mentioning your brand
- Retweets and replies
- Engagement metrics
```

---

## 🔄 Data Flow Example

### Real-World Scenario:

**9:00 AM** - Someone tweets: *"Just tried @YourBrand - absolutely amazing! 🔥"*

**9:05 AM** - SocialEye's backend runs scheduled job:
1. Searches Twitter API for "@YourBrand"
2. Finds the new tweet
3. Collects: text, author, timestamp, likes

**9:05:30 AM** - AI Sentiment Analysis:
1. Reads text: "absolutely amazing! 🔥"
2. Detects positive keywords: "amazing"
3. Detects positive emoji: "🔥"
4. Assigns score: **95% Positive**

**9:06 AM** - Data Storage:
1. Saves to database:
   ```
   mention_id: 12345
   content: "Just tried @YourBrand..."
   author: "@happycustomer"
   platform: "twitter"
   sentiment: 95
   timestamp: 2024-11-03 09:00:00
   ```

**9:06:15 AM** - Your Dashboard:
1. Total Mentions: 3,247 → 3,248 ✅
2. Positive Sentiments: 72% → 73% ✅
3. New entry appears in Mentions Feed
4. Charts update automatically

**9:06:30 AM** - You See It:
- Open SocialEye
- See the new positive mention
- Can click to view original tweet
- Decide to reply and thank customer

---

## 📊 Understanding the Metrics

### Total Mentions
- **What**: Count of every post mentioning your brand
- **Calculated**: SUM of all collected mentions
- **Good**: Growing over time
- **Alert**: Sudden spike might indicate viral event

### Sentiment Score (%)
- **What**: Percentage of mentions that are positive
- **Calculated**: (Positive Mentions / Total Mentions) × 100
- **Good**: Above 70%
- **Concerning**: Below 50%
- **Formula**: 
  ```
  If 720 out of 1000 mentions are positive:
  720 / 1000 × 100 = 72%
  ```

### Engagement Rate
- **What**: Average interactions per mention
- **Calculated**: (Likes + Shares + Comments) / Total Mentions
- **Good**: Higher than industry average
- **Example**:
  ```
  Total Mentions: 100
  Total Likes: 500
  Total Shares: 200
  Total Comments: 140
  Engagement Rate = (500 + 200 + 140) / 100 = 8.4
  ```

### Share of Voice
- **What**: Your mentions vs. competitor mentions in same space
- **Calculated**: Your Mentions / (Your Mentions + Competitor Mentions) × 100
- **Good**: Equal or greater than competitors
- **Example**:
  ```
  Your Brand: 3,100 mentions
  Competitor A: 3,200 mentions
  Competitor B: 2,800 mentions
  Total: 9,100 mentions
  
  Your Share: 3,100 / 9,100 × 100 = 34%
  ```

---

## 🔐 Security & Privacy

### How We Protect Your Data

**1. OAuth 2.0 Authentication**
- Industry-standard security protocol
- No passwords stored on our servers
- Tokens encrypted at rest

**2. Read-Only Access**
- Can only VIEW public mentions
- Cannot post on your behalf
- Cannot access private data

**3. Data Encryption**
- API keys encrypted in database
- HTTPS for all communications
- Secure token storage

**4. Revocable Access**
- Disconnect anytime from Integrations page
- Removes all stored tokens
- Stops monitoring immediately

**5. Team Permissions**
- Role-based access control:
  - **Admin**: Full access
  - **Editor**: Can configure, no team management
  - **Viewer**: Read-only access

---

## 🎯 Best Practices

### Setting Up Effective Monitoring

**1. Choose Right Keywords**
✅ DO:
- Include brand handle: `@YourBrand`
- Include hashtags: `#YourBrand`
- Include product names: `YourProduct Pro`
- Include common misspellings

❌ DON'T:
- Use too generic terms: `software`, `app`
- Track competitors' products as your own
- Add too many keywords (focus on key terms)

**2. Configure Smart Alerts**
✅ DO:
- Set realistic thresholds (test first)
- Use email for critical alerts
- Group similar alerts together

❌ DON'T:
- Set too sensitive alerts (alert fatigue)
- Alert entire team for minor events
- Ignore patterns in alerts

**3. Regular Reporting**
✅ DO:
- Schedule weekly reports for team
- Review monthly trends
- Share insights with stakeholders

**4. Competitor Monitoring**
✅ DO:
- Track 2-3 main competitors
- Compare similar metrics
- Learn from their successful posts

❌ DON'T:
- Track every competitor
- Focus only on competitors
- Copy their strategy blindly

---

## 🆘 Troubleshooting

### Common Questions

**Q: Dashboard shows "John Doe" instead of my name**
- **A**: The demo extracts name from email. In production, update in Settings → Profile.

**Q: Data seems random/not real**
- **A**: This is demo mode with simulated data from `/lib/mockData.ts`. Real version would show actual social media data.

**Q: Can't connect to Twitter**
- **A**: Demo doesn't support real connections. In production, you'd use OAuth integration.

**Q: Alerts not triggering**
- **A**: Demo simulates alerts. Real version would trigger based on actual conditions.

**Q: Want to export data**
- **A**: Click Reports → Download (demo shows interface, real version generates actual files).

---

## 📚 Additional Resources

### For Presentation:
1. Read: `/PROJECT_EXPLANATION.md` (comprehensive overview)
2. Show: Onboarding wizard (appears after login)
3. Demo: Click "How It Works" button on Dashboard
4. Explain: Each page has clear purpose and mock data

### For Development:
1. Code Structure: `/components/` (all React components)
2. Mock Data: `/lib/mockData.ts` (sample data)
3. Styling: `/styles/globals.css` (custom theme)
4. UI Components: `/components/ui/` (reusable elements)

### For Understanding:
1. OAuth Flow: How social media connections work
2. Sentiment AI: How text is analyzed for emotion
3. API Integration: How external data is fetched
4. Real-time Updates: How dashboard stays current

---

## 🎬 Demo Script for Presentation

**Opening (30 seconds):**
> "This is SocialEye, an AI-powered social media monitoring platform. It helps brands track mentions, analyze sentiment, and compare against competitors in real-time."

**Login (15 seconds):**
> "Notice how the system extracts my name from my email - 'john.doe@company.com' becomes 'John Doe' in the interface."

**Dashboard (1 minute):**
> "The dashboard shows key metrics at a glance: 3,247 total mentions with 72% positive sentiment. These charts track trends over time, and this heatmap would show geographic distribution."

**Mentions Feed (30 seconds):**
> "Here's a real-time feed of every mention. Notice the color-coded sentiment tags - green for positive, yellow for neutral, red for negative. Each can be filtered by platform or time."

**How It Works (1 minute):**
> "Let me show you how this actually works behind the scenes... [Click 'How It Works' button] This explains the complete data flow from OAuth connection to AI analysis to your dashboard."

**Closing (30 seconds):**
> "In production, you'd connect real social media accounts via OAuth, set up your brand keywords, and monitoring would begin automatically. This demo uses simulated data to show the interface and functionality."

---

**Last Updated**: November 3, 2024  
**Demo Version**: 1.0  
**Contact**: For questions about implementation, refer to `/PROJECT_EXPLANATION.md`
