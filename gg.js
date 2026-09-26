let mag = 5;

const displaymag = document.getElementById("display");
const updateDisplay = (message) => {
  displaymag.innerText = `${message} ${mag}`;
};

const fireGun = () => {
  if (mag > 0) {
    setTimeout(() => {
      updateDisplay("*BANG*");
      mag--;
      fireGun();
    }, 1000);
  } else {
    console.log("I'm out of ammo!");
  };
};

const reloadGun = () => {
  if(mag < 5) {
    mag = 5;
    updateDisplay("Reloading...");
  } else {
    updateDisplay("AMMO FULL");
  };
};

document.getElementById("shootBtn").addEventListener("click", fireGun);
document.getElementById("reloadBtn").addEventListener("click", reloadGun);