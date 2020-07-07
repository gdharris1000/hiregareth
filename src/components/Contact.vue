<template>
    <div class="container">
        <form>
             <div class="form-group row">
                <label for="formName" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="formName">
                </div>
            </div>
            <div class="form-group row">
                <label for="formEmail" class="col-sm-2 col-form-label">E-mail</label>
                <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="formEmail" placeholder="email@example.com">
                </div>
            </div>
            <div class="form-group row">
                <label for="formEmail" class="col-sm-2 col-form-label">Message</label>
                <div class="col-sm-10">
                <textarea class="form-control" rows="5"></textarea>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped>
form {
    margin-top: 20px;
}
</style>