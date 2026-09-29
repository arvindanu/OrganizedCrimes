"""Bundles the site into ONE self-contained file (dist/organized-crimes.html) for quick sharing/preview.
Run:  python3 tools/build_single_file.py"""
import re,base64,pathlib
r=pathlib.Path(__file__).resolve().parent.parent
h=(r/'index.html').read_text()
h=re.sub(r'<link rel="stylesheet" href="(css/[^"]+)">',lambda m:'<style>'+(r/m[1]).read_text()+'</style>',h)
h=re.sub(r'<script defer src="([^"]+)"></script>',lambda m:'<script>'+(r/m[1]).read_text()+'</script>',h)
for p,mt in [('assets/images/logo/logo.png','png'),('assets/images/founder/termorgan.jpg','jpeg')]:
    h=h.replace(p,'data:image/'+mt+';base64,'+base64.b64encode((r/p).read_bytes()).decode())
(r/'dist').mkdir(exist_ok=True);(r/'dist/organized-crimes.html').write_text(h)
