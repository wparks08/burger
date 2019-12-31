$(document).on("click", ".burger-button", function(event) {
    event.preventDefault();

    let data = JSON.stringify({
        devoured: true
    });

    let id = $(this).data().id;
    $.ajax({
        url: "/api/burger/" + id,
        method: "PUT",
        contentType: "application/json",
        data: data
    })
        .done(function(data) {
            location.reload();
        })
        .fail(function(data, status, err) {
            console.log(status + ": " + err);
        });
});
