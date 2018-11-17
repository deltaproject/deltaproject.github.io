var app = new Vue({
    el: "#app",
    data: {
        downloads: {
            windows: "#",
            macos: "#",
            linux: "#"
        }
    }
});

// $.getJSON('https://api.github.com/repos/deltaproject/Delta/releases/latest', function(data) {
//     console.log(data);
// });
