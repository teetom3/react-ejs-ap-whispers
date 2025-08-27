module.exports = {
  apps: [{
    name: 'whispering-app',
    script: './index.js',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    // Redémarrage automatique en cas de crash
    autorestart: true,
    // Nombre max de redémarrages
    max_restarts: 10,
    // Délai minimum entre redémarrages
    min_uptime: '10s',
    // Surveillance des fichiers (désactivée en prod)
    watch: false
  }]
};