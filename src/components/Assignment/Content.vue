<template>
    <div class="d-flex flex-column justify-content-between vh-100 px-lg-5">
        <div>
            <Nav></Nav>

            <div class="d-flex justify-content-between mb-1">
                <div class="dropdown">
                    <a class="d-flex" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <span class="me-3 fw-bold">All (4)</span>
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
                <div class="text-600 small-sm">
                    2 comments
                </div>
            </div>
            <div class="container-fluid px-0">
                <div class="row gap-3">
                    <div class="col-12 col-lg-4">
                        <List></List>
                    </div>
                    <div class="col">
                        <ListItem></ListItem>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Footer></Footer>
        </div>
    </div>
</template>

<script setup>
    import Nav from "./Content/Nav.vue"
    import List from "./Content/List.vue"
    import ListItem from "./Content/ListItem.vue"
    import Footer from "./Content/Footer.vue"
</script>

<style lang="scss" scoped>

</style>