// Image paths configuration
// Replace these with your actual image filenames from museum_digital

export const illustrations = {
  header: {
    enabled: true,
    path: '/src/assets/illustrations/header-art.png',
    alt: 'Support Coordination Header Art'
  },
  clientActions: {
    enabled: true,
    path: '/src/assets/illustrations/client-actions.png',
    alt: 'Client Actions Illustration'
  },
  providerActions: {
    enabled: true,
    path: '/src/assets/illustrations/provider-actions.png',
    alt: 'Provider Actions Illustration'
  },
  recoveryCoach: {
    enabled: true,
    path: '/src/assets/illustrations/recovery-coach.png',
    alt: 'Recovery Coach Illustration'
  },
  supportCoordinator: {
    enabled: true,
    path: '/src/assets/illustrations/support-coordinator.png',
    alt: 'Support Coordinator Illustration'
  },
  background: {
    enabled: false,
    path: '/src/assets/illustrations/background.png',
    alt: 'Background Pattern'
  }
};

// Default settings
export const defaultSettings = {
  showIllustrations: true,
  illustrationOpacity: 0.8,
  illustrationSize: 'medium' // small, medium, large
};
