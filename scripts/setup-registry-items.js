const { execSync } = require('child_process');
const fs = require('fs');

async function setupRegistryItems() {
  console.log('🚀 Setting up registry items and components...\n');
  console.log('═══════════════════════════════════════════════════════════\n');
  

    // STEP 2: Install ALL ShadCN components (BEFORE stories)
    console.log('📦 STEP 2: Installing all ShadCN UI components...');
    console.log('💡 Components must be installed BEFORE stories');
    console.log('This will install the complete component library (45+ components).\n');
    try {
      execSync('npx shadcn@latest add --all --yes', { stdio: 'inherit' });
      console.log('\n✅ All ShadCN components installed successfully\n');
    } catch (error) {
      console.error('❌ Failed to install ShadCN components:', error.message);
      console.log('💡 You can manually install components later using: npx shadcn@latest add [component]');
    }
  console.log('═══════════════════════════════════════════════════════════');
  console.log('\n✅ Setup complete!\n');
  console.log('📖 Next steps:');
  console.log('   1. Run: pnpm run dev (Start Next.js)');
  console.log('   2. Run: pnpm run storybook (Start Storybook)');
  
}

setupRegistryItems().catch(console.error);