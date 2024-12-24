# **About**
MelodyServer is a backend server for a music application, built to handle user authentication and user interactions, music streaming, playlists, and more. It features a RESTful API for seamless integration, efficient data handling, and scalability to support rich music experiences.
# **Features**
- **User Authentication:** Sign up, login, and secure access with password hashing.
- **Search:** Search music by title, artist, genre, and more.
- **Music Streaming:** Stream audio files with efficient data handling.
- **Playlist Management:** Create, update, and delete playlists.
- **Scalable Design:** Ready for high-traffic applications with optimized performance.
# **Technologies Used**
- **Node.js:** JavaScript runtime for building the server.
- **Express.js:** Web framework for creating the RESTful API.
- **Bcrypt:** Library for hashing user passwords securely.
- **PostgreSQL:** Relational database for storing user data and music content.
- **pg:** Node.js library for interacting with PostgreSQL.
# **Getting Started**
### **1.Clone the Repository**
```
git clone https://github.com/CyberKnight4269/MelodyServer.git
cd MelodyServer
```
### **2.Install Dependencies**
```
npm install
```
### **3.Set Up Environment Variables**
Create a .env file in the root directory with the following variables:
```
DB_USER= your_db_user
DB_HOST= localhost
DB_NAME= 5432
DB_PASS= your_db_password
DB_PORT= 5432
```
### **4.Run the Server**
```
npm run dev
```
The server will start on `http://localhost:3000`.
# **Contributing**
Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.<br>
2. Create a new branch (`git checkout -b feature-name`).<br>
3. Make your changes.<br>
4. Commit your changes (`git commit -m 'Add new feature'`).<br>
5. Push to your fork (`git push origin feature-name`).<br>
6. Open a Pull Request.<br>
# **Contact**
For questions or feedback, reach out to me at kanaujiadivyansh@gmail.com
