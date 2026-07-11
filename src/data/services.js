export const SERVICES_CATEGORIES = {
  IDENTITY: 'Identity & Citizenship',
  CERTIFICATES: 'Government Certificates',
  LICENCE: 'Licence & Ration',
  BUSINESS: 'Business & Taxes',
  SUPPORT: 'Online Registration & Support'
};

export const servicesData = [
  {
    id: 'aadhaar',
    name: 'Aadhaar Services',
    category: SERVICES_CATEGORIES.IDENTITY,
    icon: 'FaAddressCard',
    description: 'Correction of Name, DOB, Address, Mobile number linking, and New Aadhaar enrolment booking assistance.',
    requirements: ['Proof of Identity (PAN/Passport/Voter ID)', 'Proof of Address (EB Bill/Bank Statement)', 'Registered Mobile Number'],
    processingTime: '7 - 15 Working Days',
    price: 'Standard Facilitation Fee'
  },
  {
    id: 'pan',
    name: 'PAN Card Services',
    category: SERVICES_CATEGORIES.IDENTITY,
    icon: 'FaIdCard',
    description: 'Application for New PAN card (Form 49A), Correction in existing PAN details, and conversion of Minor to Major PAN.',
    requirements: ['Proof of Identity', 'Proof of Address', 'Date of Birth Proof', '2 Passport size photographs'],
    processingTime: '10 - 15 Working Days',
    price: 'Govt Fee + Facilitation Fee'
  },
  {
    id: 'voter-id',
    name: 'Voter ID Services',
    category: SERVICES_CATEGORIES.IDENTITY,
    icon: 'FaIdBadge',
    description: 'New Voter registration, correction of photo/address/name, linking Aadhaar with Voter ID, and replacement card download.',
    requirements: ['Age Proof (18+)', 'Address Proof', 'Passport size Photo', 'Family Voter ID (for reference)'],
    processingTime: '15 - 30 Working Days',
    price: 'Facilitation Fee Only'
  },
  {
    id: 'passport',
    name: 'Passport Assistance',
    category: SERVICES_CATEGORIES.IDENTITY,
    icon: 'FaPassport',
    description: 'Online application submission, appointment booking, fee payment, document check, and interview guidance.',
    requirements: ['Aadhaar Card', 'PAN Card / Voter ID', '10th Marksheet (for ECNR status)', 'Bank Passbook copy'],
    processingTime: 'Appointment based (Processing: 15-20 days)',
    price: 'Govt Passport Fee + Service Charge'
  },
  {
    id: 'income-cert',
    name: 'Income Certificate',
    category: SERVICES_CATEGORIES.CERTIFICATES,
    icon: 'FaRupeeSign',
    description: 'Official revenue document certifying the annual income of your family, required for scholarships and subsidies.',
    requirements: ['Salary Slip / IT Returns', 'Aadhaar Card', 'Ration Card / Smart Card', 'Self-Declaration Form'],
    processingTime: '5 - 10 Working Days',
    price: 'Govt Fee + Facilitation Fee'
  },
  {
    id: 'community-cert',
    name: 'Community Certificate',
    category: SERVICES_CATEGORIES.CERTIFICATES,
    icon: 'FaUsers',
    description: 'Obtain Caste/Community certificate (BC/MBC/SC/ST) for education and employment quotas in Tamil Nadu.',
    requirements: ['School Transfer Certificate (TC)', 'Community Certificate of Parents/Siblings', 'Aadhaar Card', 'Ration Card'],
    processingTime: '7 - 12 Working Days',
    price: 'Govt Fee + Facilitation Fee'
  },
  {
    id: 'nativity-cert',
    name: 'Nativity Certificate',
    category: SERVICES_CATEGORIES.CERTIFICATES,
    icon: 'FaHome',
    description: 'Document proving that your residential status is within Tamil Nadu, necessary for admissions and local quotas.',
    requirements: ['Aadhaar Card', 'Birth Certificate or School TC', 'Ration Card / Smart Card', 'Property Tax receipt or EB bill'],
    processingTime: '5 - 10 Working Days',
    price: 'Govt Fee + Facilitation Fee'
  },
  {
    id: 'birth-cert',
    name: 'Birth Certificate',
    category: SERVICES_CATEGORIES.CERTIFICATES,
    icon: 'FaBaby',
    description: 'Assistance in obtaining or correcting your birth certificates from corporation or municipality databases.',
    requirements: ['Hospital Discharge Summary', 'Parents Aadhaar Cards', 'Ration Card', 'Application Details'],
    processingTime: '3 - 7 Working Days',
    price: 'Facilitation Fee Only'
  },
  {
    id: 'death-cert',
    name: 'Death Certificate',
    category: SERVICES_CATEGORIES.CERTIFICATES,
    icon: 'FaFileSignature',
    description: 'Official registration assistance and retrieval of Death Certificate from Tamil Nadu local bodies.',
    requirements: ['Hospital Cause of Death Report', 'Deceased ID Proof (Aadhaar/Voter ID)', 'Applicant ID Proof', 'Cremation Receipt'],
    processingTime: '3 - 7 Working Days',
    price: 'Facilitation Fee Only'
  },
  {
    id: 'driving-licence',
    name: 'Driving Licence Services',
    category: SERVICES_CATEGORIES.LICENCE,
    icon: 'FaCar',
    description: 'Learners Licence (LLR) online booking, permanent Driving Licence application, renewal, and address change support.',
    requirements: ['Aadhaar Card', 'Age Proof (10th TC/Birth Cert)', 'Medical Certificate Form 1A (if above 40 years)', 'Address Proof'],
    processingTime: 'Slot based (15 - 20 days after test)',
    price: 'RTO Fees + Facilitation Fee'
  },
  {
    id: 'ration-card',
    name: 'Ration Card Services',
    category: SERVICES_CATEGORIES.LICENCE,
    icon: 'FaAppleAlt',
    description: 'Application for New Smart Ration Card, adding/deleting family members, address changes, and card splits.',
    requirements: ['Aadhaar Cards of all family members', 'Gas Connection details', 'EB Bill or Rent Agreement', 'Marriage Certificate (for splits/adds)'],
    processingTime: '15 - 30 Working Days',
    price: 'Facilitation Fee Only'
  },
  {
    id: 'pension',
    name: 'Pension Services',
    category: SERVICES_CATEGORIES.LICENCE,
    icon: 'FaUserShield',
    description: 'Online application for Old Age Pension (OAP), Widow Pension, Destitute Widow Pension, and Disabled Pension schemes.',
    requirements: ['Aadhaar Card', 'Ration Card', 'Income Certificate', 'Bank Passbook details', 'Medical/Destitute Certificates'],
    processingTime: '30 - 45 Working Days',
    price: 'Facilitation Fee Only'
  },
  {
    id: 'gst',
    name: 'GST Registration',
    category: SERVICES_CATEGORIES.BUSINESS,
    icon: 'FaPercent',
    description: 'GST registration for proprietorship/partnership, monthly return filing (GSTR-1, GSTR-3B), and cancellation support.',
    requirements: ['PAN of Business/Proprietor', 'Aadhaar of Proprietor', 'Electricity Bill of Business Premises', 'NOC / Rent Deed', 'Bank Cancelled Cheque'],
    processingTime: '3 - 7 Working Days',
    price: 'Professional Facilitation Fee'
  },
  {
    id: 'msme',
    name: 'MSME Registration',
    category: SERVICES_CATEGORIES.BUSINESS,
    icon: 'FaIndustry',
    description: 'Udyam Registration for small and medium enterprises to avail government schemes, subsidies, and bank loan benefits.',
    requirements: ['Aadhaar Card of Entrepreneur', 'PAN Card of Business', 'Bank Account details', 'Business Address & Employee count'],
    processingTime: '2 - 3 Working Days',
    price: 'Facilitation Fee Only'
  },
  {
    id: 'e-shram',
    name: 'E-Shram Card',
    category: SERVICES_CATEGORIES.SUPPORT,
    icon: 'FaHardHat',
    description: 'Registration for unorganized sector workers to receive direct benefit transfers and accident insurance benefits.',
    requirements: ['Aadhaar Card', 'Active Mobile Number linked with Aadhaar', 'Savings Bank Account details', 'Occupation Details'],
    processingTime: 'Same Day Generation',
    price: 'Facilitation Fee Only'
  },
  {
    id: 'online-applications',
    name: 'Online Application Support',
    category: SERVICES_CATEGORIES.SUPPORT,
    icon: 'FaGlobe',
    description: 'Assistance in filling government exam applications (TNPSC, SSC, UPSC, IBPS), college applications, and school admissions.',
    requirements: ['Educational Marksheets (10th/12th/Degree)', 'Passport size Photo & Signature', 'Community details', 'ID Proof'],
    processingTime: 'Instant Submission',
    price: 'Facilitation Fee'
  }
];
