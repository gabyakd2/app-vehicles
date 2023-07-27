export const getVehicles = async () => {
    const res = await fetch("https://challenge.egodesign.dev/api/models/");
    return res.json();
  };