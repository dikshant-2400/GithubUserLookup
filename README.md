# Github User Lookup

A simple web application that searches GitHub users in real time using the GitHub API. It implements **debouncing** to reduce unnecessary API requests while typing.

## Features

- **Live User Search:** Search for GitHub users by entering their username.
- **Debouncing:** Waits 500 milliseconds after typing stops before making an API request.
- **Profile Information:** Displays the user's avatar, name, username, bio, and public repository count.
- **Error Handling:** Displays appropriate messages when a user is not found or a request fails.
- **Responsive Layout:** Uses a clean, centered dark-themed interface.
- **Input Validation:** Hides the profile card when the input is empty.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub REST API
- Fetch API
- Async/Await
- Debouncing using `setTimeout()` and `clearTimeout()`

## How It Works

1. Enter a GitHub username in the search box.
2. The debounce function waits 500 milliseconds after the last keystroke.
3. JavaScript sends a request to the GitHub API.
4. The application displays the user's profile information.
5. If the username does not exist or the request fails, an error message is displayed.

## API Used

GitHub Users API:

`https://api.github.com/users/{username}`

Example: https://api.github.com/users/cat

## How to Run

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Open `index.html` in your browser, or use the Live Server extension.
4. Enter a GitHub username to view the profile.

## Concepts Practiced

- DOM manipulation
- Event listeners
- Debouncing
- API requests using `fetch()`
- Promises and asynchronous JavaScript
- `async/await` and error handling
- Template literals
- Dynamic HTML rendering
