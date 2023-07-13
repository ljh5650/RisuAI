import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.risu.ai',
  appName: 'RisuMobile',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
