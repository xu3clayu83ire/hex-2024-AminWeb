<template>
    <div class="list-item-card card">
        <div class="card-header d-flex justify-content-between align-items-center p-3">
            <div>
                <p class="small mb-1">Chapter Assignment 2 / HTML&CSS</p>
                <h2 class="fw-bold fs-6">Please check this file for me, thanks!</h2>
            </div>
            <div>
                <span class="material-icons">
                    more_vert
                </span>
            </div>
        </div>
        <div class="card-body py-3 px-5 ">
            <div class="card-body-item d-flex">
                <div class="me-2">
                    <img src="./../../../assets/images/emilywang.jpeg" class="object-fit-cover rounded-5" width="40"
                        height="40" alt="">
                </div>
                <div>
                    <h3 class="fw-bold fs-6 mb-1">Emily Wang</h3>
                    <p class="small-sm text-600">10:38 AM (4 hours ago)</p>
                    <p class="my-3 small">Hi Teacher, the attached file is my homework of chapter 2. And here comes a
                        question:
                        Why in the
                        following code the height of the <code>div</code> is bigger than the height of the
                        <code>img</code>
                        ? There is a
                        gap below the
                        image, but it doesn’t seems to be a padding/margin. What is the gap or extra space below image?
                    </p>
                    <a type="button" class="border bg-100 d-inline-flex py-2 px-3 fw-bold">
                        <span class="material-icons">
                            attach_file
                        </span>
                        <span class="ms-2">HW-2-David.zip</span>
                    </a>
                    <hr>
                </div>
            </div>
            <div class="card-body-item d-flex">
                <div class="me-2">
                    <img src="./../../../assets/images/andychen.jpeg" class="object-fit-cover rounded-5" width="40"
                        height="40" alt="">
                </div>
                <div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <h3 class="fw-bold fs-6 mb-1">Andy Chen (You)</h3>
                            <p class="small-sm text-600">13:24 AM (1 hours ago)</p>
                        </div>
                        <div>
                            <span class="material-icons me-4">
                                star_border
                            </span>
                            <span class="material-icons">
                                edit
                            </span>
                        </div>
                    </div>
                    <p class="my-3 small">
                        Hi David, by default, an image is rendered inline, like a letter so it sits on the same line
                        that a, b, c and d sit on. There is space below that line for the descenders you find on letters
                        like g, j, p and q. <br><br>You can: <br>
                    </p>
                    <ul>
                        <li>
                            adjust the <code>vertical-align</code> of the
                            image to
                            position it
                            elsewhere
                            (e.g. the <code>middle</code> ) or
                        </li>
                        <li>
                            change the <code>display</code> so it isn’t
                            inline.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .list-item-card code {
        background-color: #F8F9FA;
        color: #198754;
        font-family: Roboto Mono;
        font-size: 14px;
    }

    .card-body-item ul {
        margin-left: 2rem;
    }

    .card-body-item ul li {
        list-style: disc;
    }
</style>