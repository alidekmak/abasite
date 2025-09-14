#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

// Configuration
const config = {
  appDir: './app',
  buildDir: './dist',
  server: 'root@138.197.131.6',
  remotePath: '/var/www/abasite',
  // serverDir: '../server',
  // remoteServerPath: '/server'
};

console.log('🚀 Starting deployment...');

try {
  // Change to app directory
  console.log('📁 Changing to app directory...');
  process.chdir(config.appDir);
  
  // Build the project
  console.log('🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Sync files to production server
  console.log('📤 Deploying to production server...');
  const rsyncCommand = `rsync -avz ${config.buildDir}/ ${config.server}:${config.remotePath}`;
  execSync(rsyncCommand, { stdio: 'inherit' });
  
  // Optional: Deploy server files (commented out)
  // console.log('📤 Deploying server files...');
  // const serverRsyncCommand = `rsync -avz ${config.serverDir}/ ${config.server}:${config.remoteServerPath}`;
  // execSync(serverRsyncCommand, { stdio: 'inherit' });
  
  console.log('✅ Deployment completed successfully!');
  console.log(`🌐 Site deployed to: ${config.server}:${config.remotePath}`);
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}