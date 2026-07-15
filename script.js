const applicationForm = document.getElementById('application');
const successMessage = document.getElementById('success');
const languageSwitch = document.getElementById('languageSwitch');
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwS0wFFXqJnqfi0VV6in0VX06fZqksaf6Hx1pl-7mVb4MgLmqeVUXy_PssMGqsLcQOr/exec';

const translations = {
  en: {
    student_application_form: 'STUDENT APPLICATION FORM',
    form_title: 'Lakshya Fellowship',
    form_intro: 'Tell us about your ambitions, your strengths and the future you want to create. Please answer each question honestly.',
    section_1: 'Section 1: Your Dream',
    dream_hint: 'Tell us about the future you want to build.',
    question_1: '1. What is your biggest dream in life?',
    question_2: '2. Imagine yourself 15 years from today. Describe the life you hope to be living.',
    section_2: 'Section 2: Purpose',
    question_3: '3. Why should India need more people like you in the profession you want to choose?',
    section_3: 'Section 3: Grit & Determination',
    question_4: '4. What is the biggest obstacle standing between you and your dream today?',
    question_5: '5. Which statement describes you best?',
    consistency_option_1: 'I always finish what I start.',
    consistency_option_2: 'I sometimes lose focus but quickly get back on track.',
    consistency_option_3: 'I struggle to stay consistent but want to improve.',
    question_6: '6. What are you willing to sacrifice to achieve your dream?',
    question_7: '7. Tell us one important thing you have learned outside school in the past year.',
    section_4: 'Section 4: Why Lakshya?',
    question_8: '8. Why do you want to become a Lakshya Fellow instead of preparing on your own?',
    question_9: '9. What do you expect from Lakshya?',
    expectations_option_1: 'Expert teachers',
    expectations_option_2: 'Personal mentorship',
    expectations_option_3: 'Regular tests and performance analysis',
    expectations_option_4: 'Study discipline and accountability',
    expectations_option_5: 'Doubt-solving support',
    expectations_option_6: 'Motivation and confidence',
    expectations_option_7: 'Career guidance',
    expectations_option_8: 'A supportive learning community',
    expectations_option_9: 'Scholarship opportunity',
    other_specify: 'Other (please specify)',
    question_10: '10. What should Lakshya expect from you?',
    commitments_option_1: 'I will attend classes regularly.',
    commitments_option_2: 'I will complete every assignment sincerely.',
    commitments_option_3: 'I will appear for every scheduled test.',
    commitments_option_4: 'I will work hard even when the syllabus becomes difficult.',
    commitments_option_5: 'I will respect teachers and fellow students.',
    commitments_option_6: 'I will accept feedback and continuously improve.',
    commitments_option_7: 'I will maintain discipline and integrity.',
    commitments_option_8: 'I will never give up on my dream.',
    section_5: 'Section 5: Personal Information',
    full_name: 'Full Name',
    mobile: 'Mobile Number',
    whatsapp: 'WhatsApp Number',
    email: 'Email ID',
    gender: 'Gender',
    dob: 'Date of Birth',
    state: 'State',
    district: 'District',
    school: 'School Name',
    class: 'Current Class',
    board: 'Board',
    section_6: 'Section 6: Academic Information',
    programme: 'Which programme are you interested in?',
    programme_jee: 'JEE',
    programme_neet: 'NEET',
    programme_both: 'Both',
    programme_exploring: 'Still Exploring',
    select_option: 'Select',
    gender_female: 'Female',
    gender_male: 'Male',
    gender_nonbinary: 'Non-binary',
    gender_prefer_not_to_say: 'Prefer not to say',
    yes_label: 'Yes',
    no_label: 'No',
    declaration: 'Declaration',
    class_x: 'Class X Percentage',
    currentPct: 'Current Class Result (%)',
    maths: 'Mathematics Marks (X)',
    science: 'Science Marks (X)',
    favourite: 'Favourite Subject',
    challenge: 'Subject you find most challenging',
    started_preparation: 'Have you started preparing for NEET/JEE?',
    coaching: 'Are you currently enrolled in any coaching or online programme?',
    coachingName: 'If yes, please mention the name.',
    section_7: 'Section 7: Parent / Guardian Details',
    parent: 'Parent/Guardian Name',
    relationship: 'Relationship',
    parentMobile: 'Mobile Number',
    parentWhatsapp: 'WhatsApp Number',
    fatherProfession: "Father's Profession",
    motherProfession: "Mother's Profession",
    familyIncome: 'Total Family Income per Year',
    final_questions: 'Final Questions',
    convince: 'If the Lakshya Selection Committee had only one minute to decide whether to select you, what would you say to convince them?',
    proof: 'What have you already done to prove that your dream is more than just a wish? Please give specific examples.',
    truth: 'I certify that the information provided is true and accurate.',
    admission: 'I understand that submitting this application does not guarantee admission.',
    submit: 'Submit Application'
  },
  hi: {
    student_application_form: 'छात्र आवेदन फ़ॉर्म',
    form_title: 'लक्ष्य फेलोशिप',
    form_intro: 'हमें अपने लक्ष्य, अपनी ताकत और उस भविष्य के बारे में बताइए जो आप बनाना चाहते हैं। कृपया प्रत्येक प्रश्न का ईमानदारी से उत्तर दें।',
    section_1: 'अनुभाग 1: आपका सपना',
    dream_hint: 'हमें उस भविष्य के बारे में बताइए जिसे आप बनाना चाहते हैं।',
    question_1: '1. जीवन में आपका सबसे बड़ा सपना क्या है?',
    question_2: '2. कल्पना कीजिए 15 साल बाद आप अपनी जिंदगी में क्या देखना चाहते हैं।',
    section_2: 'अनुभाग 2: उद्देश्य',
    question_3: '3. ऐसा क्यों होना चाहिए कि भारत को आपके जैसे और लोगों की जरूरत हो?',
    section_3: 'अनुभाग 3: दृढ़ता और निश्चय',
    question_4: '4. आपके सपने और आज के बीच सबसे बड़ी बाधा क्या है?',
    question_5: '5. कौन सा कथन आपको सबसे अच्छा व्यक्त करता है?',
    consistency_option_1: 'मैं हमेशा जो शुरू करता हूँ, उसे पूरा करता हूँ।',
    consistency_option_2: 'कभी-कभी मेरा ध्यान भटकता है लेकिन मैं जल्दी वापस ट्रैक पर आ जाता हूँ।',
    consistency_option_3: 'मुझे लगातार बने रहने में कठिनाई होती है लेकिन मैं बेहतर होना चाहता हूँ।',
    question_6: '6. अपने सपने को पाने के लिए आप क्या त्यागने को तैयार हैं?',
    question_7: '7. पिछले एक साल में आपने स्कूल के बाहर क्या महत्वपूर्ण सीखा है?',
    section_4: 'अनुभाग 4: क्यों लक्ष्य?',
    question_8: '8. आप स्वतंत्र रूप से तैयारी करने की बजाय लक्ष्‍य फेलो बनने की इच्छा क्यों रखते हैं?',
    question_9: '9. आप लक्ष्य से क्या अपेक्षा रखते हैं?',
    expectations_option_1: 'विशेषज्ञ शिक्षक',
    expectations_option_2: 'व्यक्तिगत मार्गदर्शन',
    expectations_option_3: 'नियमित टेस्ट और प्रदर्शन विश्लेषण',
    expectations_option_4: 'अध्ययन अनुशासन और जवाबदेही',
    expectations_option_5: 'संदेह समाधान सहायता',
    expectations_option_6: 'प्रेरणा और आत्मविश्वास',
    expectations_option_7: 'कैरियर मार्गदर्शन',
    expectations_option_8: 'एक सहयोगी सीखने वाला समुदाय',
    expectations_option_9: 'छात्रवृत्ति का अवसर',
    other_specify: 'अन्य (कृपया बताएं)',
    question_10: '10. लक्ष्य आपसे क्या अपेक्षा रखे?',
    commitments_option_1: 'मैं नियमित रूप से कक्षाओं में उपस्थित रहूंगा।',
    commitments_option_2: 'मैं हर असाइनमेंट को ईमानदारी से पूरा करूंगा।',
    commitments_option_3: 'मैं हर निर्धारित परीक्षा में भाग लूंगा।',
    commitments_option_4: 'मैं कठिन पाठ्यक्रम में भी कड़ी मेहनत करूंगा।',
    commitments_option_5: 'मैं शिक्षकों और साथियों का सम्मान करूंगा।',
    commitments_option_6: 'मैं प्रतिक्रिया स्वीकार करूंगा और निरंतर सुधार करूंगा।',
    commitments_option_7: 'मैं शिष्टाचार और ईमानदारी बनाए रखूंगा।',
    commitments_option_8: 'मैं अपने सपने को कभी नहीं छोड़ूंगा।',
    section_5: 'अनुभाग 5: व्यक्तिगत जानकारी',
    full_name: 'पूरा नाम',
    mobile: 'मोबाइल नंबर',
    whatsapp: 'व्हाट्सएप नंबर',
    email: 'ईमेल आईडी',
    gender: 'लिंग',
    dob: 'जन्मतिथि',
    state: 'राज्य',
    district: 'ज़िला',
    school: 'स्कूल का नाम',
    class: 'वर्तमान कक्षा',
    board: 'बोर्ड',
    section_6: 'अनुभाग 6: शैक्षणिक जानकारी',
    programme: 'आप किस कार्यक्रम में रुचि रखते हैं?',
    programme_jee: 'JEE',
    programme_neet: 'NEET',
    programme_both: 'दोनों',
    programme_exploring: 'अभी खोज रहे हैं',
    select_option: 'चुनें',
    gender_female: 'महिला',
    gender_male: 'पुरुष',
    gender_nonbinary: 'नॉन-बाइनरी',
    gender_prefer_not_to_say: 'कहना नहीं चाहेंगे',
    yes_label: 'हाँ',
    no_label: 'नहीं',
    declaration: 'घोषणा',
    class_x: 'कक्षा X प्रतिशत',
    currentPct: 'वर्तमान कक्षा परिणाम (%)',
    maths: 'गणित अंक (X)',
    science: 'विज्ञान अंक (X)',
    favourite: 'पसंदीदा विषय',
    challenge: 'वह विषय जिसमें आपको सबसे अधिक कठिनाई होती है',
    started_preparation: 'क्या आपने NEET/JEE की तैयारी शुरू कर दी है?',
    coaching: 'क्या आप वर्तमान में किसी कोचिंग या ऑनलाइन कार्यक्रम में नामांकित हैं?',
    coachingName: 'यदि हां, तो नाम बताएं।',
    section_7: 'अनुभाग 7: अभिभावक / संरक्षक विवरण',
    parent: 'अभिभावक/संरक्षक का नाम',
    relationship: 'रिश्ता',
    parentMobile: 'मोबाइल नंबर',
    parentWhatsapp: 'व्हाट्सएप नंबर',
    fatherProfession: 'पिता का पेशा',
    motherProfession: 'माता का पेशा',
    familyIncome: 'वार्षिक कुल पारिवारिक आय',
    final_questions: 'अंतिम प्रश्न',
    convince: 'यदि लक्ष्य चयन समिति के पास आपको चुनने का केवल एक मिनट हो, तो आप उन्हें क्या कहेंगे?',
    proof: 'अपने सपने को केवल एक इच्छा से अधिक साबित करने के लिए आपने पहले क्या किया है? कृपया विशिष्ट उदाहरण दें।',
    truth: 'मैं प्रमाणित करता हूँ कि दी गई जानकारी सच्ची और सही है।',
    admission: 'मैं समझता हूँ कि आवेदन जमा करने का अर्थ प्रवेश की गारंटी नहीं है।',
    submit: 'आवेदन भेजें'
  }
};

function translate(lang) {
  const dictionary = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    const text = dictionary[key];
    if (!text) return;

    const tag = element.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea') {
      element.placeholder = text;
      return;
    }

    if (tag === 'label' && element.querySelector('input,textarea,select')) {
      const preservedChildren = Array.from(element.childNodes).filter((node) => node.nodeType !== Node.TEXT_NODE);
      element.textContent = '';
      preservedChildren.forEach((node) => element.appendChild(node));
      element.append(document.createTextNode(text));
      return;
    }

    element.textContent = text;
  });

  document.querySelectorAll('.language-toggle button').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });
}

document.querySelectorAll('input[type="tel"]').forEach((phoneInput) => {
  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
  });
});

document.querySelectorAll('input[type="number"]').forEach((numberInput) => {
  numberInput.addEventListener('keydown', (event) => {
    if (['e', 'E', '+', '-'].includes(event.key)) event.preventDefault();
  });
});

languageSwitch.addEventListener('change', () => {
  translate(languageSwitch.checked ? 'hi' : 'en');
});

translate('en');

applicationForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!applicationForm.reportValidity()) return;

  const submitButton = applicationForm.querySelector('button[type="submit"]');
  const formData = new FormData(applicationForm);
  const data = {};

  for (const [key, value] of formData.entries()) {
    if (data[key]) data[key] = [].concat(data[key], value);
    else data[key] = value;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Saving application...';

  try {
    if (APPS_SCRIPT_URL.startsWith('PASTE_')) throw new Error('Missing Apps Script URL');

    // no-cors lets a Google Apps Script Web App accept form data from this page.
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data)
    });

    successMessage.textContent = 'Your application has been sent to Lakshya successfully.';
    successMessage.classList.add('visible');
    applicationForm.reset();
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch {
    successMessage.textContent = 'Could not save your application. Please configure the Google Apps Script Web App URL.';
    successMessage.classList.add('visible');
  } finally {
    submitButton.disabled = false;
    const activeLang = document.querySelector('.language-toggle button.active')?.dataset.lang || 'en';
    submitButton.textContent = translations[activeLang].submit;
  }
});
