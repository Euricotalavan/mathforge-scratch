# MathForge Cloud Preview

MathForge v0.7.0 with invite-only Google login and Supabase workspace storage. Guest practice remains disposable; signed-in users can save drafts and submissions, resume across browsers, export JSON/LaTeX, and explicitly clean up backed-up data.

Cloud access is currently limited to the owner. No private SQLite data is included. The client contains only the Supabase publishable key; authorization and quotas are enforced by server-side RPC and RLS.

KaTeX assets are local; see KATEX-LICENSE.txt. Offline reopening and automatic conflict merging are not supported.
