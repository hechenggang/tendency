<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 0;
  box-sizing: border-box;
  text-decoration: none;
  background-color: #ffffff;
}

html {
  font-size: 15px;
}

ul {
  list-style: none;
}

li {
  width: 100%;
  padding: 0.5rem;
  line-height: 1.5rem;
  font-size: 1rem;
  color: #1a2b3c;
}

hr {
  border-top: 1.5px solid #1a2b3c;
  margin: 0.5rem 0rem;
}

.box {
  display: block;
  width: 100%;
  padding: 2rem;
}

.title {
  font-size: 1.35rem;
  line-height: 2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.5rem;
  font-size: 1rem;
  color: #1a2b3c;
  border: 1.5px solid #1a2b3c;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.buttons-right {
  display: flex;
  align-items: center;
}

.button {
  display: inline-block;
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  cursor: pointer;
  color: #1a2b3c;
  border: 1.5px solid #1a2b3c;
  transition: ease 0.1s;
}

.button:hover {
  color: #ffffff;
  background-color: #5698c3;
  transition: ease 0.1s;
}

.link {
  padding: 0.5rem;
  color: #5698c3;
  cursor: pointer;
  text-decoration: none;
}

.shadow {
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
}

.between {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 600px) {
  .box {
    padding: 1rem;
  }
}

#chart {
  width: 100%;
  height: 30rem;
}

.brief {
  margin-left: 0.5rem;
}

select {
  background-color: rgb(255, 230, 197);
  padding: 0.25rem;
}
</style>
