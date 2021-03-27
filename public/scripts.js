async function diningHalls () {
  const data = await fetch('/api/dining');
  const getDiningHalls = await data.json();

  const hallArray = getDiningHalls.data;
  const table = document.querySelector(".target");
  hallArray.forEach((hall) => {
    const halls = document.createElement("tr");
    halls.innerHTML = 
      `
      <th>${hall.hall_id}</th>
      <td>${hall.hall_name}</td>
      <td>${hall.hall_address}</td>
      `;
    table.append(halls);
  });
 }

window.onload = diningHalls();
