const API = "https://api.github.com/users/";

const forms = document.getElementById("form");
const search = document.getElementById("search");
const mains = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios(API + username);
    createUsers(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status == 404) {
      creatError("Not A Api github");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(`${API}${username}/repos?sort=created`);
    addRepos(data);
  } catch (error) {
    creatError("Problem Fetch Repos");
  }
}

function createUsers(user) {
  const cardHTML = `  <div class="card">
            <div>
                                    <!--fetch api axios -->
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>

            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                    <ul>
                        <li>${user.followers_url} <strong>Followers</strong></li>
                        <li>${user.following_url}<strong>Following</strong></li>
                        <li>${user.public_repos}<strong>Repos</strong></li>
                    </ul>
            
                    <div id="repo"></div>
                </div>
        </div>
        `;
  mains.innerHTML = cardHTML;
}

function addRepos(repos) {
  const reposElem = document.getElementById("repo");

  repos.slice(0, 9).forEach((repo) => {
    const repoElem = document.createElement("a");

    repoElem.classList.add("repos");
    repoElem.href = repo.html_url;
    repoElem.target = "_blank";
    repoElem.innerText = repo.name;

    reposElem.appendChild(repoElem);
  });
}
function creatError(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
  `;

  mains.innerHTML = cardHTML;
}
forms.addEventListener("submit", (e) => {
  e.preventDefault();
  const users = search.value;

  if (users) {
    getUser(users);
  }
});
