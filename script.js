const reviewTitle = document.getElementById("reviewTitle");
const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");
const submit = document.getElementById("reviewButton");
const reviews = document.getElementById("reviewsRow");

submit.addEventListener("click", addNewReview);

function addNewReview(e) {
    e.preventDefault();
    const newReview = `<div class="col-lg-4 col-md-6 py-3"><div class="card h-100">
                            <div class="card-body">
                                <h4 class="card-title">${reviewTitle.value}</h4>
                                <blockquote class="blockquote mb-0">
                                    <p>${reviewText.value}</p>
                                    <footer class="text-end blockquote-footer"><i>${reviewName.value || "Anonymous"}</i></footer>
                                </blockquote>
                            </div>
                        </div></div>`;

    reviews.innerHTML += newReview;
}