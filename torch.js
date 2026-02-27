module.exports = {
  run: [
    // windows amd
    {
      "when": "{{platform === 'win32' && gpu === 'amd'}}",
      "method": "shell.run",
      "params": {
        "env": { "UV_SKIP_WHEEL_FILENAME_CHECK": "1" },
        "venv_python": "{{args && args.venv_python ? args.venv_python : null}}",
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install --pre torch==2.10.0a0+rocm7.0.0rc20250917 --index-url https://rocm.nightlies.amd.com/v2/gfx120X-all/",
          "uv pip install --pre torchaudio==2.8.0a0+rocm7.0.0rc20250917 --index-url https://rocm.nightlies.amd.com/v2/gfx120X-all/",
          "uv pip install --pre torchvision==0.25.0a0+rocm7.0.0rc20250917 --index-url https://rocm.nightlies.amd.com/v2/gfx120X-all/"
        ]
      },
      "next": null
    },
    // linux rocm (amd)
    {
      "when": "{{platform === 'linux' && gpu === 'amd'}}",
      "method": "shell.run",
      "params": {
        "venv_python": "{{args && args.venv_python ? args.venv_python : null}}",
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": "uv pip install torch==2.7.0 torchvision==0.22.0 torchaudio==2.7.0 --index-url https://download.pytorch.org/whl/rocm6.3"
      },
      "next": null
    }
  ]
}
