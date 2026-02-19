# 🎓 Campus Event Registration System

A simple and elegant web application for managing campus event registrations. Built with vanilla JavaScript, HTML, and CSS.

## 📋 Features

✅ **Register Students** - Simple form to register with name, email, and event name  
✅ **View Registrations** - Display all registrations in a clean list format  
✅ **Cancel Registration** - Mark registrations as cancelled  
✅ **Input Validation** - Validates all required fields  
✅ **Responsive Design** - Works seamlessly on desktop and mobile devices  

## 🛠️ Tech Stack

- **Frontend**: HTML5
- **Styling**: CSS3
- **Logic**: Vanilla JavaScript (ES6+)
- **IDE**: GitHub CodeSpaces

## 📁 Project Structure

```
vibe-sdd-demo/
├── index.html      # Main HTML structure
├── script.js       # JavaScript functionality
├── style.css       # Styling and responsive design
├── app.js          # Additional utilities
└── README.md       # Project documentation
```

## 🚀 How to Use

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/thejashwini02/vibe-sdd-demo.git
   cd vibe-sdd-demo
   ```

2. **Open in Browser**  
   - Simply open `index.html` in your web browser
   - Or use GitHub CodeSpaces for a cloud-based development environment

3. **Register for an Event**  
   - Enter your name, email, and the event name
   - Click the "Register" button
   - Your registration will appear in the list below

4. **Manage Registrations**  
   - View all your registrations in the list
   - Click "Cancel" to cancel any registration
   - Cancelled registrations will be marked with status "cancelled"

## 📝 Data Structure

Each registration object contains:
```javascript
{
  id: 1,                          // Unique identifier
  name: "John Doe",              // Student name
  email: "john@example.com",     // Email address
  event: "Tech Summit 2026",     // Event name
  status: "registered"           // Status: "registered" or "cancelled"
}
```

## 🎨 UI Components

- **Registration Form** - Clean input fields for name, email, and event
- **Submit Button** - Easy-to-use registration button
- **Registrations List** - Displays all student registrations
- **Cancel Button** - Quick action to cancel any registration

## 💡 Features Explained

### Register Function
- Collects user input from form fields
- Creates a registration object with unique ID
- Adds registration to the array
- Re-renders the list to display the new registration

### Cancel Function
- Finds the registration by ID
- Updates status to "cancelled"
- Re-renders the list to show updated status

### Render Function
- Loops through all registrations
- Dynamically generates HTML for each entry
- Displays cancel button for each registration

## 🔧 Customization

You can easily customize:
- Form fields (add more input types)
- Styling (modify CSS for different colors/themes)
- Validation rules (add stricter input validation)
- Storage (implement localStorage to persist data)

## 📦 Dependencies

None! This project uses only vanilla JavaScript with no external libraries.

## 🐛 Known Limitations

- Data is stored in memory (refreshing the page clears registrations)
- No backend/database integration
- No email verification
- No duplicate prevention

## 🚀 Future Enhancements

- [ ] Add localStorage for persistent storage
- [ ] Implement data export (CSV/JSON)
- [ ] Add email validation
- [ ] Create admin dashboard
- [ ] Add event date/time selection
- [ ] Implement filtering by event or status
- [ ] Add search functionality

## 👨‍💻 Author

**Jashwini** - [@thejashwini02](https://github.com/thejashwini02)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

---

**Happy Registering! 🎉**