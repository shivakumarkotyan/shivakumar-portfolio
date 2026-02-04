import os
from flask import Flask, render_template, send_file

app = Flask(__name__, template_folder='.')

# Sample project data from your CV
PROJECTS = [
    {
        "title": "ShopEase Website",
        "description": "A scalable Flask-based e-commerce website with user authentication, product catalogue, and shopping cart functionality.",
        "technologies": ["Python", "Flask", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
        "period": "Sep 2024 - Jan 2025",
        "features": [
            "User authentication system",
            "Product catalogue management",
            "Shopping cart functionality",
            "RESTful Flask API",
            "Session-based authentication",
            "Search features"
        ],
        "image": "shopease.jpg",  # Add your image in static/images/
        "github_link": "https://github.com/shivakumarkotyan/shopease"  # Replace with actual link
    },
    {
        "title": "To-Do List App",
        "description": "A full-stack task management application with real-time email notifications.",
        "technologies": ["Flask", "HTML", "CSS", "Bootstrap", "SQLite", "smtplib"],
        "period": "July 2025 - Nov 2025",
        "features": [
            "Task management with CRUD operations",
            "Real-time email notifications",
            "SMTP integration for automated reminders",
            "Bulk email functionality",
            "Detailed logging system"
        ],
        "image": "todo-list-app.jpg",  # Add your image in static/images/
        "github_link": "https://github.com/shivakumarkotyan/todo-list-app"  # Replace with actual link
    }
]

# Sample skills data from your CV
SKILLS = {
    "Programming Languages": ["Python", "JavaScript"],
    "Frontend Technologies": ["HTML", "CSS", "React.js", "Bootstrap"],
    "Backend & Frameworks": ["Flask", "RESTful API Development", "Django"],
    "Development Tools & Libraries": ["Git", "GitHub", "VS Code", "Eclipse", "Pandas", "NumPy"],
    "Database Technologies": ["MySQL", "SQL (CRUD, Joins, Constraints)"],
    "Additional Skills": ["Problem Solving", "Communication", "Team Collaboration"]
}

# Education data from CV
EDUCATION = [
    {
        "institution": "Bhandarkars' Arts and Science College, Kundapura",
        "degree": "Bachelor of Computer Applications",
        "percentage": "69.38%",
        "period": "2021 - 2024"
    },
    {
        "institution": "Viveka PU College, Kota",
        "degree": "Pre-University Education",
        "percentage": "70.83%",
        "period": "2020 - 2021"
    },
    {
        "institution": "Viveka Junior College, Kota",
        "degree": "Secondary Education",
        "percentage": "80.60%",
        "period": "2018 - 2019"
    }
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html', projects=PROJECTS)

@app.route('/skills')
def skills():
    return render_template('skills.html', skills=SKILLS)

@app.route('/education')
def education():
    return render_template('education.html', education=EDUCATION)

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/download-resume')
def download_resume():
    pdf_path = os.path.join(app.root_path, 'static', 'Shivakumar_CV.pdf')
    if not os.path.exists(pdf_path):
        return "Resume PDF not found", 404
    return send_file(pdf_path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True, port=5000)