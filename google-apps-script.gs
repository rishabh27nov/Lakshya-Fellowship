/*
  Paste this file in Google Sheet > Extensions > Apps Script.
  The Google account deploying this Web App must have Editor access to the sheet.
*/
const SPREADSHEET_ID = '1_1Bw3clcOGjLeVsP3nN1f3F1IVMWQjLlWU8yzVHdVjk';
const SHEET_NAME = 'Sheet1';

const FIELDS = {
  submitted_at: 'Submitted At',
  biggest_dream: '1. What is your biggest dream in life?',
  future_life: '2. Imagine yourself 15 years from today. Describe the life you hope to be living.',
  purpose: '3. Why should India need more people like you in the profession you want to choose?',
  obstacle: '4. What is the biggest obstacle standing between you and your dream today?',
  consistency: '5. Which statement describes you best?',
  sacrifice: '6. What are you willing to sacrifice to achieve your dream?',
  outside_school_learning: '7. Tell us one important thing you have learned outside school in the past year.',
  why_lakshya: '8. Why do you want to become a Lakshya Fellow instead of preparing on your own?',
  expectations: '9. What do you expect from Lakshya?',
  expectations_other: '9. Other expectation (please specify)',
  commitments: '10. What should Lakshya expect from you?',
  commitments_other: '10. Other commitment (please specify)',
  full_name: 'Full Name', mobile: 'Mobile Number', whatsapp: 'WhatsApp Number',
  email: 'Email', gender: 'Gender', date_of_birth: 'Date of Birth', state: 'State',
  district: 'District', school_name: 'School Name', current_class: 'Current Class',
  board: 'Board', programme: 'Programme', class_x_percentage: 'Class X Percentage',
  current_percentage: 'Current Class Result (%)', mathematics_marks: 'Mathematics Marks (X)',
  science_marks: 'Science Marks (X)', favourite_subject: 'Favourite Subject',
  challenging_subject: 'Subject you find most challenging',
  started_preparation: 'Have you started preparing for NEET/JEE?',
  coaching: 'Are you currently enrolled in any coaching or online programme?', coaching_name: 'If yes, please mention the name.',
  guardian_name: 'Parent/Guardian Name', relationship: 'Relationship',
  guardian_mobile: 'Parent/Guardian Mobile', guardian_whatsapp: 'Parent/Guardian WhatsApp',
  father_profession: "Father's Profession", mother_profession: "Mother's Profession",
  annual_family_income: 'Total Family Income per Year',
  selection_statement: 'If the Lakshya Selection Committee had only one minute to decide whether to select you, what would you say to convince them?',
  proof_of_dream: 'What have you already done to prove that your dream is more than just a wish? Please give specific examples.',
  truth: 'I certify that the information provided is true and accurate.',
  admission: 'I understand that submitting this application does not guarantee admission.'
};

function getTargetSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error(`The sheet tab "${SHEET_NAME}" was not found.`);
  return sheet;
}

function setupHeaders() {
  const sheet = getTargetSheet_();
  const headers = Object.values(FIELDS);
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
  return headers;
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const sheet = getTargetSheet_();
    const headers = setupHeaders();

    const valueForHeader = Object.fromEntries(Object.entries(FIELDS).map(([key, header]) => {
      const value = key === 'submitted_at' ? new Date() : payload[key] || '';
      return [header, Array.isArray(value) ? value.join(' | ') : value];
    }));
    sheet.appendRow(headers.map((header) => valueForHeader[header] ?? ''));

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  try {
    const sheet = getTargetSheet_();
    return ContentService.createTextOutput(`Lakshya form endpoint is active. Target: ${sheet.getName()}`);
  } catch (error) {
    return ContentService.createTextOutput(`Configuration error: ${error.message}`);
  }
}
