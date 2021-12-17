
const parentCat = document.getElementById("categoriesGridContainer");
const navBarItems = document.getElementsByClassName("navbarItems ");

for (let item of navBarItems) 
{
  item.addEventListener("click",(clickEvent)=>
    {
      clickEvent.preventDefault();
        if(clickEvent.target.dataset.link)
        {
          const products =clickEvent.target.dataset.link;
          const storage =localStorage.setItem("type",products);
          console.log(storage)
          const url = location.href.replace("HomePage","pro");
          location.href = url;
        } else return ;
    })
}
  


 parentCat.addEventListener("click",(clickEvent)=>
 {
  clickEvent.preventDefault();
  if(clickEvent.target.dataset.link)
  {
    const products =clickEvent.target.dataset.link;
    const storage =localStorage.setItem("type",products);
    const url = location.href.replace("HomePage","pro");
    location.href = url;
  } else  return;
})

