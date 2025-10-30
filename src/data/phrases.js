export const clientActions = [
  { label: 'Spoke with client', text: 'Writer spoke with the client' },
  { label: 'Client reported', text: 'Client reported' },
  { label: 'Client requested', text: 'Client requested' },
  { label: 'Client confirmed', text: 'Client confirmed' },
  { label: 'Client expressed', text: 'Client expressed' },
  { label: 'Presented well', text: 'Client presented well' },
  { label: 'In good spirits', text: 'Client was in good spirits' },
  { label: 'Appeared anxious', text: 'Client appeared anxious' },
  { label: 'Client cancelled', text: 'Client cancelled' },
  { label: 'Did not attend', text: 'Client did not attend' },
  { label: 'Struggling with', text: 'Client is struggling with' },
  { label: 'Agreed to', text: 'Client agreed to' },
  { label: 'Declined', text: 'Client declined' },
  { label: 'Informed being', text: 'Client informed being' },
  { label: 'Sent text message', text: 'Client sent text message' }
];

export const timeActions = [
  { label: '15 minutes', text: '15 minutes' },
  { label: '30 minutes', text: '30 minutes' },
  { label: '45 minutes', text: '45 minutes' },
  { label: '1 hour', text: '1 hour' },
  { label: '1 hour 30 minutes', text: '1 hour 30 minutes' },
  { label: '2 hours', text: '2 hours' },
  { label: 'Travel: 30 minutes', text: 'Travel: 30 minutes' }
];

export const providerTypes = [
  {
    label: 'Support Worker',
    type: 'sw',
    actions: [
      { label: 'Spoke with SW', text: 'Writer spoke with support worker' },
      { label: 'Coordinated shift', text: 'Coordinated shift with support worker' },
      { label: 'SW reported', text: 'Support worker reported' },
      { label: 'Scheduled SW', text: 'Scheduled support worker for' }
    ]
  },
  {
    label: 'OT',
    type: 'ot',
    actions: [
      { label: 'Spoke with OT', text: 'Writer spoke with OT' },
      { label: 'Assessment scheduled', text: 'OT assessment scheduled' },
      { label: 'OT recommendations', text: 'OT provided recommendations' }
    ]
  },
  {
    label: 'Counsellor',
    type: 'counsellor',
    actions: [
      { label: 'Debriefed with counsellor', text: 'Writer debriefed with counsellor' },
      { label: 'Counsellor reported', text: 'Counsellor reported' },
      { label: 'Session scheduled', text: 'Session scheduled with counsellor' }
    ]
  },
  { label: 'Plan Manager', type: 'simple', text: 'Writer contacted plan manager' },
  { label: 'LAC', type: 'simple', text: 'Writer spoke with LAC' },
  { label: 'Psychologist', type: 'simple', text: 'Writer contacted psychologist' },
  { label: 'NDIS', type: 'simple', text: 'Writer called NDIS' },
  { label: 'GP', type: 'simple', text: 'Writer contacted GP' }
];

export const internalActions = [
  { label: 'Completed', text: 'Writer completed' },
  { label: 'Updated', text: 'Writer updated' },
  { label: 'Documented', text: 'Writer documented' },
  { label: 'Reviewed', text: 'Writer reviewed' },
  { label: 'Prepared', text: 'Writer prepared' },
  { label: 'Finalised', text: 'Writer finalised' },
  { label: 'Submitted', text: 'Writer submitted' },
  { label: 'Uploaded to Astalty', text: 'Writer uploaded to Astalty' },
  { label: 'Sent email', text: 'Writer sent email' },
  { label: 'Left voicemail', text: 'Writer left voicemail' },
  { label: 'Attempted to contact', text: 'Writer attempted to contact' },
  { label: 'Scheduled', text: 'Writer scheduled' },
  { label: 'Coordinated', text: 'Writer coordinated' },
  { label: 'Advocated for', text: 'Writer advocated for' }
];

export const documentActions = [
  { label: 'Support Plan', text: 'Support Plan' },
  { label: 'Progress Report', text: 'Progress Report' },
  { label: 'Risk Assessment', text: 'Risk Assessment' },
  { label: 'Service Agreement', text: 'Service Agreement' },
  { label: 'Consent Form', text: 'Consent Form' },
  { label: 'Emergency Plan', text: 'Emergency and Disaster Plan' },
  { label: 'S100 form', text: 'S100 form' },
  { label: 'COC', text: 'COC (Change of Circumstances)' }
];

export const guideData = {
  supportCoordinator: {
    coordination: [
      { label: 'Researched providers', text: 'Writer researched suitable NDIS providers' },
      { label: 'Arranged service agreements', text: 'Writer arranged service agreements with providers' },
      { label: 'Connected to mainstream services', text: 'Writer connected participant to mainstream services' },
      { label: 'Organized provider meeting', text: 'Writer organized provider meeting to discuss support needs' },
      { label: 'Coordinated stakeholders', text: 'Writer coordinated with multiple stakeholders' },
      { label: 'Identified support gaps', text: 'Writer identified gaps in current support arrangements' },
      { label: 'Facilitated referral', text: 'Writer facilitated referral to' }
    ],
    capacityBuilding: [
      { label: 'Taught NDIS portal use', text: 'Writer taught participant how to use NDIS portal' },
      { label: 'Developed organizational skills', text: 'Writer helped participant develop organizational skills' },
      { label: 'Coached provider communication', text: 'Writer coached participant on provider communication' },
      { label: 'Supported independent decisions', text: 'Writer supported participant to make independent decisions' },
      { label: 'Demonstrated problem-solving', text: 'Writer demonstrated problem-solving strategies' },
      { label: 'Built support management confidence', text: "Writer built participant's confidence in managing supports" }
    ],
    crisis: [
      { label: 'Developed crisis plan', text: 'Writer developed crisis contingency plan' },
      { label: 'Coordinated urgent support', text: 'Writer coordinated urgent support response' },
      { label: 'Addressed support breakdown', text: 'Writer addressed support breakdown' },
      { label: 'Convened emergency meeting', text: 'Writer convened emergency case meeting' },
      { label: 'Implemented risk strategies', text: 'Writer implemented risk mitigation strategies' },
      { label: 'Contacted crisis team', text: 'Writer contacted crisis team on behalf of participant' }
    ],
    advocacy: [
      { label: 'Advocated for choices', text: "Writer advocated for participant's choices" },
      { label: 'Addressed service concerns', text: 'Writer addressed service quality concerns' },
      { label: 'Supported complaint process', text: 'Writer supported participant to make complaint' },
      { label: 'Educated on NDIS rights', text: 'Writer educated participant on NDIS rights' },
      { label: 'Facilitated provider change', text: 'Writer facilitated provider change' },
      { label: 'Wrote support letter', text: 'Writer wrote support letter for' }
    ],
    planManagement: [
      { label: 'Monitored budget', text: 'Writer monitored budget utilization' },
      { label: 'Prepared review docs', text: 'Writer prepared plan review documentation' },
      { label: 'Updated service bookings', text: 'Writer updated service bookings' },
      { label: 'Submitted NDIA report', text: 'Writer submitted progress report to NDIA' },
      { label: 'Tracked funding', text: 'Writer tracked funding across categories' },
      { label: 'Requested plan amendment', text: 'Writer requested plan amendment' }
    ],
    stakeholder: [
      { label: 'Liaised with family', text: 'Writer liaised with family members' },
      { label: 'Coordinated with Plan Manager', text: 'Writer coordinated with Plan Manager' },
      { label: 'Communicated with LAC', text: 'Writer communicated with LAC' },
      { label: 'Facilitated case conference', text: 'Writer facilitated case conference' },
      { label: 'Shared support strategies', text: 'Writer shared support strategies with team' },
      { label: 'Obtained consent', text: 'Writer obtained consent for information sharing' }
    ]
  },
  recoveryCoach: {
    coaching: [
      { label: 'Recovery coaching session', text: 'Writer provided recovery-oriented coaching' },
      { label: 'Used motivational interviewing', text: 'Writer used motivational interviewing techniques' },
      { label: 'Explored recovery goals', text: "Writer explored participant's recovery goals" },
      { label: 'Celebrated milestones', text: 'Writer celebrated recovery milestones' },
      { label: 'Reinforced strengths', text: "Writer reinforced participant's strengths" },
      { label: 'Provided encouragement', text: 'Writer provided hope and encouragement' },
      { label: 'Shared recovery strategies', text: 'Writer shared recovery strategies' }
    ],
    mentalHealth: [
      { label: 'Developed WRAP', text: 'Writer helped develop Wellness Recovery Action Plan (WRAP)' },
      { label: 'Taught coping strategies', text: 'Writer taught coping strategies' },
      { label: 'Identified warning signs', text: 'Writer identified early warning signs' },
      { label: 'Created safety plan', text: 'Writer created suicide safety plan' },
      { label: 'Practiced grounding', text: 'Writer practiced grounding techniques' },
      { label: 'Supported emotional regulation', text: 'Writer supported emotional regulation' },
      { label: 'Trauma-informed support', text: 'Writer provided trauma-informed support' }
    ],
    clinical: [
      { label: 'Liaised with psychiatrist', text: 'Writer liaised with psychiatrist' },
      { label: 'Attended clinical appointment', text: 'Writer attended clinical appointment with participant' },
      { label: 'Coordinated MH team', text: 'Writer coordinated with mental health team' },
      { label: 'Discharge planning', text: 'Writer facilitated hospital discharge planning' },
      { label: 'Communicated with case manager', text: 'Writer communicated with case manager' },
      { label: 'Integrated supports', text: 'Writer integrated clinical and NDIS supports' }
    ],
    skillDevelopment: [
      { label: 'Coached daily living skills', text: 'Writer coached daily living skills' },
      { label: 'Practiced social skills', text: 'Writer practiced social interaction skills' },
      { label: 'Developed routines', text: 'Writer supported routine development' },
      { label: 'Built self-advocacy', text: 'Writer built self-advocacy skills' },
      { label: 'Enhanced decision-making', text: 'Writer enhanced decision-making capacity' },
      { label: 'Supported community participation', text: 'Writer supported community participation' }
    ],
    engagement: [
      { label: 'Weekly check-in', text: 'Writer provided weekly check-in call' },
      { label: 'Re-engaged in supports', text: 'Writer re-engaged participant in supports' },
      { label: 'Addressed barriers', text: 'Writer addressed motivational barriers' },
      { label: 'Accompanied to activity', text: 'Writer accompanied participant to new activity' },
      { label: 'Adjusted approach', text: 'Writer adjusted approach to maintain engagement' },
      { label: 'Consistent presence', text: 'Writer provided consistent presence during difficult period' }
    ],
    family: [
      { label: 'Educated family', text: 'Writer educated family on recovery principles' },
      { label: 'Facilitated family meeting', text: 'Writer facilitated family meeting' },
      { label: 'Coached carers', text: 'Writer coached carers on support strategies' },
      { label: 'Mediated communication', text: 'Writer mediated family communication' },
      { label: 'Involved support network', text: 'Writer involved support network in planning' },
      { label: 'Built MH understanding', text: 'Writer built family understanding of mental health' }
    ]
  }
};

export const recoveryTools = [
  { label: 'WRAP', text: 'Implemented WRAP (Wellness Recovery Action Plan)' },
  { label: 'RAS-DS', text: 'Used Recovery Assessment Scale (RAS-DS)' },
  { label: 'Beyond Now', text: 'Utilized Beyond Now safety planning app' },
  { label: 'CRM', text: 'Applied Collaborative Recovery Model' },
  { label: 'Mindfulness', text: 'Introduced mindfulness techniques' },
  { label: 'Peer Support', text: 'Connected to peer support group' },
  { label: 'Recovery College', text: 'Enrolled in recovery college course' },
  { label: 'CHIME Framework', text: 'Used CHIME framework' }
];
