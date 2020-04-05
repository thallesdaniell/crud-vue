}
<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Titulo:"
                label-for="input-1"
            >
                <b-form-input
                    id="input-1"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Nome da tarefa"
                ></b-form-input>
            </b-form-group>

            <b-form-textarea
                id="textarea"
                v-model="form.description"
                placeholder="Descrição da tarefa"
                rows="3"
                max-rows="6"
            ></b-form-textarea>

            <pre class="mt-3 mb-0"></pre>


            <b-button type="submit" variant="primary">Salvar</b-button>
            <b-button type="reset" variant="danger">Cancelar</b-button>
        </b-form>
        <b-card class="mt-3" header="Observer">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>

<script>
    import {
        BForm,
        BFormGroup,
        BFormInput,
        BFormTextarea

    } from 'bootstrap-vue'

    import {
        BButton,
        BFormSelect,


    } from 'bootstrap-vue'

    import {
        BCard


    } from 'bootstrap-vue'

    export default {
        data() {
            return {
                form: {
                    name: '',
                    description: '',
                },
                show: true
            }
        },
        methods: {

            onSubmit(evt) {
                evt.preventDefault()
                axios.post('api/tasks', this.form)
                    .then(response => (
                        this.$router.push({name: 'tasks'})
                    ))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            },
            onReset(evt) {
                evt.preventDefault()
                this.form.description = ''
                this.form.name = ''
                this.$nextTick(() => {
                    this.show = true
                })
            }
        },
        components: {
            BForm,
            BFormGroup,
            BFormInput,
            BButton,
            BFormSelect,
            BCard,
            BFormTextarea

        }
    }
</script>
