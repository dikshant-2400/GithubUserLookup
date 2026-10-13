const userInput = document.getElementById("user-input");
const userCard = document.getElementById("user-card");

function debounce(func, delay = 500) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

async function fetchUserData(username) {
  const query = username.trim();

  if (!query) {
    userCard.style.display = "none";
    userCard.innerHTML = "";
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${query}`);

    if (!response.ok) {
      throw new Error(
        response.status === 404 ? "User not found" : "Failed to fetch user"
      );
    }

    const data = await response.json();

    userCard.innerHTML = `
    <a href="${data.html_url}" target="_blank" rel="noopener noreferrer" class="profile-link">
      <img src="${data.avatar_url}" alt="${data.name || data.login}" />
      <h2>${data.name || data.login}</h2>
      <p>@${data.login}</p>
    </a>
    <p>${data.bio || "No bio available."}</p>
    <p>
      <strong>
        <a href="${data.html_url}?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          class="repo-link">
          Public Repos: ${data.public_repos}
        </a>
      </strong>
    </p>
    `;
    userCard.style.display = "block";
  } catch (error) {
    userCard.innerHTML = `<p style="color: #ff6b6b;">${error.message}</p>`;
    userCard.style.display = "block";
  }
}

const handleSearch = debounce((event) => {
  fetchUserData(event.target.value);
}, 500);

userInput.addEventListener("input", handleSearch);