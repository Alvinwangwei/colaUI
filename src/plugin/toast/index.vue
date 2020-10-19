<template>
    <transition name="fade">
        <div class="cola-toast"  v-show="visible">
            <div class="content">
                {{msg}}
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'cola_toast',
    data() {
        return {
            visible: false,
            msg: ''
        }
    },
    mounted() {
    }
}
</script>

<style scoped>
.cola-toast {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .4);
}
.content {
    padding: 8px 20px;
    color: #fff;
    background: rgba(0, 0, 0, .7);
    border-radius: 8px;
    max-width: 120px;
    box-sizing: border-box;
}
.fade-enter-active, .fade-leave-active {
    transition:  opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>