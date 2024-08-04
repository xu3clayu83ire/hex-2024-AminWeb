<template>
    <nav>
        <div class="d-flex justify-content-between align-items-center py-5">
            <div class="d-flex align-items-center">
                <h1 class="fs-3 fw-bold me-5">Assignment</h1>
                <div class="dropdown">
                    <a class="d-flex" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <span class="me-3 fw-bold">All Courses</span>
                        <span class="material-icons text-success">
                            expand_more
                        </span>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <a type="button">
                    <span class="material-icons me-4">
                        search
                    </span>
                </a>
                <a type="button">
                    <span class="material-icons">
                        notifications_active
                    </span>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>