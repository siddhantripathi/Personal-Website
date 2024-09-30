from flask import Flask, render_template, request, flash
from flask_mail import Mail, Message

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace this with a strong secret key

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # You can use other providers like Outlook, etc.
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'siddhant8792@gmail.com'
app.config['MAIL_PASSWORD'] = 'pzqd qplb mjuw zqxf'  # Replace this with the generated app password

mail = Mail(app)

# List of projects (GitHub links)
projects_list = [
    {
        "name": "Lane and Object Detection System",
        "url": "https://github.com/yourusername/project1",
        "description": "This project uses YOLOv3 to detect lanes and objects in real-time for autonomous vehicles."
    },
    {
        "name": "Social Media Platform",
        "url": "https://github.com/yourusername/project2",
        "description": "A platform developed with Flask to facilitate seamless student-teacher interactions."
    },
    {
        "name": "Cloud-based Data Analytics Tool",
        "url": "https://github.com/yourusername/project3",
        "description": "A cloud-based tool that leverages AWS for large-scale data analysis and insights."
    }
]

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/projects')
def projects():
    return render_template('projects.html', projects=projects_list)

# Contact form route with email functionality
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        # Compose email
        msg = Message('Personal Website Contact Form',
                      sender=email,
                      recipients=['siddhant8792@gmail.com'])  # Replace with your actual email
        msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
        mail.send(msg)

        flash('Your message has been sent! I will get back to you soon.')
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
