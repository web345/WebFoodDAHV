window.addEventListener("load", function(e) {
    //==============Header Fixed==============
    const headerFixed = document.querySelector(".header");
    window.addEventListener("scroll", function(e) {
        if (this.scrollY >= 400) {
            {
                headerFixed.classList.add("fixed-header");
            }
        } else {
            {
                headerFixed.classList.remove("fixed-header");
            }
        }
    });

    //=============MENU TAB PRODUCT=================
    const tabTitle = document.querySelectorAll(".tap-title");
    const productList = document.querySelectorAll(".product-list");

    [...tabTitle].forEach((item) =>
        item.addEventListener("click", handleTabtitle)
    );
    // Function click Tab
    function handleTabtitle(e) {
        [...tabTitle].forEach((item) => item.classList.remove("is-active"));
        e.target.classList.add("is-active");

        // lấy data
        const tabNumber = e.currentTarget.dataset.tab;

        [...productList].forEach((item) => {
            item.classList.remove("active-product");

            if (item.getAttribute("data-tab") === tabNumber) {
                item.classList.add("active-product");
            }
        });
    }

    //===========MODAL PRODUCT=========================
    const modalProduct = document.querySelectorAll(".modal-product");
    const closeModal = document.querySelectorAll(".close-modal");
    const viewProduct = document.querySelectorAll(".view-product");
    const selcetItem1 = document.querySelectorAll(".select-item1");
    const selcetItem2 = document.querySelectorAll(".select-item2");
    const selcetItem3 = document.querySelectorAll(".select-item3");
    const modalImage = document.querySelectorAll(".modal-image");

    [...viewProduct].forEach((item) =>
        item.addEventListener("click", handleViewproduct)
    );

    // Function Modal Product --- show modal
    function handleViewproduct(e) {
        [...modalProduct].forEach((el) => {
            [...modalProduct].forEach((item) => item.classList.remove("show-modal"));
            // add show modal
            el.classList.add("show-modal");
            // close modal
            [...closeModal].forEach((item) =>
                item.addEventListener("click", function(e) {
                    el.classList.remove("show-modal");
                })
            );
        });
    }

    // =========== Select Product=================
    [...selcetItem1].forEach((item) =>
        item.addEventListener("click", function(e) {
            [...modalImage].forEach((item) => {
                item.setAttribute("src", "./image/product02.jpg");
            });
        })
    );
    [...selcetItem2].forEach((item) =>
        item.addEventListener("click", function(e) {
            [...modalImage].forEach((item) => {
                item.setAttribute("src", "./image/product03.jpg");
            });
        })
    );
    [...selcetItem3].forEach((item) =>
        item.addEventListener("click", function(e) {
            [...modalImage].forEach((item) => {
                item.setAttribute("src", "./image/product04.jpg");
            });
        })
    );

    //==============COUNTER QUANTITY===================
    const counterMinus = document.querySelectorAll(".number-minus");
    const counterPlus = document.querySelectorAll(".number-plus");
    const counterQuantity = document.querySelectorAll(".number-quantity");

    [...counterQuantity].forEach((item) => {
        parseInt(item.textContent);
    });
    let counterNumber = counterQuantity;
    console.log(counterNumber);

    //================SCROLLL UP========
    window.addEventListener("scroll", function(e) {
        const scrollUp = document.querySelector(".scroll-up");
        if (scrollY >= 400) {
            scrollUp.classList.add("show-scroll");
        } else {
            scrollUp.classList.remove("show-scroll");
        }
    });

    /// ================TOGGLE MENU================
    const toggleMenu = document.querySelector(".toggle-menu");
    const menuHome = document.querySelector(".menu");
    toggleMenu.addEventListener("click", function(e) {
        menuHome.classList.toggle("show-menu");
        toggleMenu.classList.toggle("fa-bars");
        toggleMenu.classList.toggle("fa-times");
    });
    document.addEventListener("click", function(e) {
        if (!menuHome.contains(e.target) && !e.target.matches(".toggle-menu")) {
            menuHome.classList.remove("show-menu");
            toggleMenu.classList.add("fa-bars");
            toggleMenu.classList.remove("fa-times");
        }
    });
});