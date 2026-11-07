import { dev } from 'astro';

async function start() {
  try {
    const server = await dev({
      root: '.',
      server: {
        port: 4321,
        host: '0.0.0.0',
      },
    });
    console.log('>>> PAOJICHANG SERVER RUNNING ON http://localhost:4321 <<<');
  } catch (err) {
    console.error('Server error:', err);
  }
}

start();

// Ensure process stays alive indefinitely
setInterval(() => {}, 1000 * 60 * 60);
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});
