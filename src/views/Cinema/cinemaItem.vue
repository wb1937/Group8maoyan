<template>
    <li>
        <h4>{{data.nm}}</h4>
        <p>{{data.addr}}</p>
    </li>
</template>
<script>
export default {
    props:["data"]
}
</script>
<style scoped lang="scss">
 li{
    padding:10px;
 }
</style>