from http.server import SimpleHTTPRequestHandler, HTTPServer
import json

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_GET(self):
        if self.path == '/blog.json':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            with open('blog.json', 'rb') as file:
                self.wfile.write(file.read())
        else:
            super().do_GET()

def run_server():
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, CORSRequestHandler)
    print('Server running at http://localhost:8000/')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()
