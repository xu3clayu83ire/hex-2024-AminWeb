<script setup>
    import { ref } from 'vue'
</script>

<template>
    <div class="d-flex flex-column justify-content-between p-5 vh-100">
        <div>
            <img class="mb-5" src="@/assets/images/logo-ANSWER.svg" width="151" alt="">
            <ul>
                <li>
                    <a class="sidebar-link" type="button">
                        <span class="material-icons">
                            assessment
                        </span>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a class="sidebar-link" type="button">
                        <span class="material-icons">
                            question_answer
                        </span>
                        <span>Question</span>
                    </a>
                </li>
                <li>
                    <a class="sidebar-link active" type="button">
                        <span class="material-icons">
                            assignment
                        </span>
                        <span>Assignment</span>
                    </a>
                </li>
                <li>
                    <a class="sidebar-link" type="button">
                        <span class="material-icons">
                            video_library
                        </span>
                        <span>Course</span>
                    </a>
                </li>
                <li>
                    <a class="sidebar-link" type="button">
                        <span class="material-icons">
                            supervisor_account
                        </span>
                        <span>Admin</span>
                    </a>
                </li>
                <li>
                    <a class="sidebar-link" type="button">
                        <span class="material-icons">
                            settings
                        </span>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="">
            <div class="d-flex align-items-center">
                <img src="./../assets/images/andychen.jpeg" class="object-fit-cover rounded-5 me-3" width="40"
                    height="40" alt="">
                <div>
                    <p class="mb-1 fw-bold">Andy Chen</p>
                    <p class="text-600 small">andy0401@mail.com</p>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
    ul li {
        position: relative;
    }

    ul li:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    ul li>.sidebar-link {
        display: flex;
        font-weight: 700;
    }

    ul li>.sidebar-link>.material-icons {
        margin-right: 1rem;
    }

    ul li>.sidebar-link.active {
        color: #198754;
    }

    ul li>.sidebar-link:hover {
        color: #198754;
    }

    ul li>.sidebar-link:hover::before {
        width: 4px;
    }

    .sidebar-link::before {
        position: absolute;
        top: 0px;
        left: -32px;
        content: "";
        width: 0px;
        height: 100%;
        background-color: #198754;
    }

    .sidebar-link:hover::before {
        width: 4px;
    }

    .sidebar-link.active::before {
        width: 4px;
    }
</style>