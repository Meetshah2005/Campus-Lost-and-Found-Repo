# **Campus Lost and Found**

The project is a Campus Lost and Found web application designed to help university students recover lost items. Users can report items they have lost, including details such as a description, images, and the location where the item was lost. Other users who find these items can respond with information, images, and the item's location, or post that the item is found, facilitating faster recovery.

# **System Architecture**

The Campus Lost & Found system uses a simple 3-tier architecture:
- Frontend — React + Vite: Renders UI pages (login, register, dashboards), sends requests to backend API, and displays responses from backend Fast development server 
- Backend — Node.js: Handles routes for login, register, and testing API, reads/writes user data from the JSON database, and acts as the middleware between frontend and data layer
- Database — JSON File Storage: lightweight and easy for early-stage development
Stores(Registered users & Login credentials) and enables quick testing without a full database

## **Design Goals**

- DG1 Ease & Efficiency of Recovery: The system should minimize direct interaction between the user who lost an item and the user who found it. Under normal circumstances, the recovery process should require no more than 2 user interactions and it ensures that the item can be retrieved quickly and efficiently.
- DG2 Ease of navigation: The system should feature a clear, intuitive, and user-friendly interface that allows users to navigate through the major functions of the platform in no more than 4 interactions promoting accessibility and reducing user frustration.
- DG3 User and Data Security:  The system must protect all the user data and make sure user identities are anonymous through the system-generated aliases or user-chosen account names. Personal information such as name and contact information should only be disclosed when absolutely necessary(when an item is confirmed as found and a meeting must be arranged)


# **Run Instruction**
#### 0. If necessary, create a containg foler to house the project file

#### 1. Clone the repo
```shell
git clone https://github.com/Meetshah2005/Campus-Lost-and-Found-Repo.git
```

#### 2. Navigate to the project directory
```shell
cd Campus-Lost-and-Found-Repo
```

#### 3. Install npm dependencies
```shell
npm install
```
#### 4. Run app
```shell
npm run start-all
```

#### 5. Visit the provided link
```shell
http://localhost:5173/
```

# **Memebers**
| Roles | Member |
|------|--------|
| Scrum Master| Meet |
|Product Owner|Aayush|
|Developer| Aidan|
|Developer|Kyle|
|Developer|Greg|
|Developer| Daniel |


