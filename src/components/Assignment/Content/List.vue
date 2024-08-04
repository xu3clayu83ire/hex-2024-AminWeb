<template>
    <ul class="ass-list list-group small-sm">
        <li class="ass-list-item list-group-item p-3 active">
            <p class="ass-list-desc">
                <span>Chapter Assignment 2</span>
                <span class="">4 hrs ago</span>
            </p>
            <p class="ass-list-desc">
                <span class="fw-bold fs-6">Please check this file…</span>
                <span class="text-600">Emily Wang</span>
            </p>
        </li>
        <li class="ass-list-item list-group-item p-3">
            <p class="ass-list-desc">
                <span>Chapter Assignment 1</span>
                <span class="">12 hrs ago</span>
            </p>
            <p class="ass-list-desc">
                <span class="fw-bold fs-6">My Homework</span>
                <span class="text-600">David Xu</span>
            </p>
        </li>
        <li class="ass-list-item list-group-item p-3">
            <p class="ass-list-desc">
                <span>Final Assignment</span>
                <span class="">18 hrs ago</span>
            </p>
            <p class="ass-list-desc">
                <span class="fw-bold fs-6">Have a problem with this…</span>
                <span class="text-600">Tony Wei</span>
            </p>
        </li>
        <li class="ass-list-item list-group-item p-3">
            <p class="ass-list-desc">
                <span>Final Assignment</span>
                <span class="small">19 hrs ago</span>
            </p>
            <p class="ass-list-desc">
                <span class="fw-bold fs-6">Did I do it right?</span>
                <span class="small text-600">Christina Lin</span>
            </p>
        </li>
    </ul>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .ass-list .ass-list-desc {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ass-list .ass-list-item.list-group-item {
        border-color: #CED4DA;
    }

    .ass-list .ass-list-item.list-group-item:hover {
        cursor: pointer;
        background-color: #F8F9FA;
    }

    .ass-list .ass-list-item.list-group-item.active {
        background-color: #F8F9FA;
        color: #212529;
    }
</style>