# Local handwriting recognition assets

Hand-to-TeX inference source adapted from https://github.com/Projekt-Deep-Learning-2026/hand-to-tex at cf27b992950eba3b1d3600bf18be44868d217917 (MIT; included license). Changes: same-origin URLs, bounded decode, tensor disposal, isolated cancellable worker.

htt-mini weights: https://huggingface.co/m4jkiuwr/htt-mini at 58170cc16748a5652e5e58caf93019fb8b0603c4. Model card explicitly declares MIT. Encoder 11269588 bytes, SHA256 2b56c120cd5b760637572fc5c35012dcf14c7e923ca3362d54fdd54ddc6ef719. Decoder 7241361 bytes, SHA256 a06a382a4b21445e0ef4d5ba33db4dc4eb9250ca4ff4bace7a90d50342ef18ed. Vocabulary from the pinned source commit above. Retain source license alongside weights and vocabulary.

ONNX Runtime Web 1.24.3 (MIT; included license), pinned in package and lockfile. No build scripts for protobufjs were enabled: its optional version-warning postinstall is explicitly disabled. Models run on-device after user action. No inference request or handwriting is sent externally. Hosting still serves/downloads assets; this is not a promise of offline-first load or free unlimited hosting traffic.

Observed smoke test: a hand-drawn cross produced \\times and could be inserted/undone. This is not a recognition accuracy benchmark. Complex formulas, device memory, touch/stylus and timing remain test-dependent. Show experimental status, editable preview, cancel, timeout and original-ink fallback.
