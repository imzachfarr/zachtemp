# Form Tracking & Zapier Integration Setup

This system captures every form interaction and saves qualified leads to Google Sheets via Zapier.

## 🎯 What This Does

- **Captures ALL user interactions** - Every question response is saved locally and to database
- **Cost-efficient** - Only sends completed, qualified forms to Zapier (not every keystroke)
- **Lead recovery** - See exactly where users drop off to optimize conversion
- **Analytics dashboard** - View completion rates, dropoff points, and response breakdowns
- **Export ready** - Download CSV files for manual analysis or import to other tools

## 🚀 Setup Instructions

### 1. Environment Variables

Add to your `.env.local` file:

```bash
# Zapier Webhook URL for qualified leads
NEXT_PUBLIC_ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_KEY
```

### 2. Zapier Setup

1. **Create a Zap** in Zapier
2. **Trigger**: Webhooks by Zapier → Catch Hook
3. **Copy the webhook URL** and add it to your environment variables
4. **Action**: Google Sheets → Create Spreadsheet Row
5. **Map fields**:
   - `name` → Name column
   - `email` → Email column  
   - `phone` → Phone column
   - `followers` → Followers column
   - `niche` → Niche column
   - `currentMonetization` → Current Monetization column
   - `monthlyIncome` → Monthly Income column
   - `investmentBudget` → Investment Budget column
   - `whyWorkTogether` → Why Work Together column
   - `timestamp` → Submission Date column
   - `sessionId` → Session ID column

### 3. Data Storage

The system saves data in multiple places:

**Local Storage**: Browser-based for immediate access
**File System**: `data/forms/` directory with:
- Individual form files: `sessionId.json`
- Master log: `form_log.jsonl`
- Completed forms: `completed_forms.jsonl`

### 4. Analytics Dashboard

Visit `/admin/analytics` to view:
- Completion rates
- Dropoff analysis by step
- Response breakdowns
- Export CSV functionality
- Recent submissions table

## 📊 Data Flow

1. **User starts form** → Session created with unique ID
2. **Each question response** → Saved to localStorage + database (NO Zapier call)
3. **User completes form** → Only then sent to Zapier → Google Sheets
4. **User drops off** → Data still captured for analysis

## 🔧 Customization

### Add More Fields to Track

Edit `src/lib/hooks/useFormTracking.ts` and add fields to the Zapier payload:

```typescript
// Add new fields here
customField: data.responses.customField || '',
```

### Change Storage Location

Modify `src/app/api/forms/save/route.ts` to save to database instead of files:

```typescript
// Replace file system code with database calls
await db.forms.create({
  data: formData
});
```

### Webhook Security

Add webhook validation in `useFormTracking.ts`:

```typescript
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.ZAPIER_WEBHOOK_SECRET}`
}
```

## 📈 Analytics Examples

**Completion Rate**: See what % of users complete the full form
**Dropoff Points**: Identify which questions cause users to leave
**Response Analysis**: See most common answers for each field
**Lead Quality**: Filter by followers/budget to see qualified leads

## 🚨 Important Notes

- **Qualified leads only go to Zapier** (saves on Zapier task usage)
- **All interactions are captured** for analysis
- **Data persists** even if user leaves and comes back
- **GDPR compliant** - users can request data deletion via analytics dashboard

## 🛠️ Troubleshooting

**Forms not saving?** Check `/api/forms/save` endpoint is working
**Zapier not receiving?** Verify webhook URL in environment variables
**Analytics empty?** Ensure forms directory has write permissions
**CSV export failing?** Check file system permissions in `data/forms/`

---

**Access analytics at**: `https://yoursite.com/admin/analytics`
**Export CSV**: Click "Download CSV" in analytics dashboard 