#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const os = require('os');

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

// Check if rsync is available
function checkRsync() {
  try {
    execSync('rsync --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Alternative deployment using scp (more widely available)
function deployWithScp() {
  console.log('📤 Using scp for deployment (rsync not available)...');
  
  // First, remove existing files on server
  console.log('�️  Cleaning remote directory...');
  try {
    execSync(`ssh ${config.server} "rm -rf ${config.remotePath}/*"`, { stdio: 'inherit' });
  } catch (error) {
    console.log('⚠️  Could not clean remote directory (may not exist yet)');
  }
  
  // Copy files using scp
  const scpCommand = `scp -r ${config.buildDir}/* ${config.server}:${config.remotePath}/`;
  execSync(scpCommand, { stdio: 'inherit' });
}

// Fallback for Windows or systems without rsync/scp
function deployManual() {
  console.log('� Manual deployment instructions:');
  console.log('');
  console.log('Since rsync/scp are not available, please manually:');
  console.log(`1. Copy all files from ${path.resolve(config.buildDir)} directory`);
  console.log(`2. Upload them to ${config.server}:${config.remotePath}`);
  console.log('3. You can use an FTP client, file manager, or hosting control panel');
  console.log('');
  console.log('Built files are ready in:', path.resolve(config.buildDir));
}

try {
  // Change to app directory
  console.log('📁 Changing to app directory...');
  process.chdir(config.appDir);
  
  // Build the project
  console.log('🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Try different deployment methods
  if (checkRsync()) {
    console.log('📤 Deploying with rsync...');
    const rsyncCommand = `rsync -avz ${config.buildDir}/ ${config.server}:${config.remotePath}`;
    execSync(rsyncCommand, { stdio: 'inherit' });
  } else {
    // Try scp as fallback
    try {
      execSync('ssh -V', { stdio: 'ignore' });
      deployWithScp();
    } catch (error) {
      deployManual();
      process.exit(0); // Exit gracefully for manual deployment
    }
  }
  
  console.log('✅ Deployment completed successfully!');
  console.log(`🌐 Site deployed to: ${config.server}:${config.remotePath}`);
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}