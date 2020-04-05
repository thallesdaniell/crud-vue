<template>
    <div>
        <b-form @submit.prevent="updateTask">
            <b-form-group
                id="input-group-1"
                label="Titulo:"
                label-for="input-1"
            >
                <b-form-input
                    id="input-1"
                    v-model="task.name"
                    type="text"
                    required
                    placeholder="Nome da tarefa"
                ></b-form-input>
            </b-form-group>

            <b-form-textarea
                id="textarea"
                v-model="task.description"
                placeholder="Descrição da tarefa"
                rows="3"
                max-rows="6"
            ></b-form-textarea>

            <pre class="mt-3 mb-0"></pre>


            <b-button type="submit" variant="primary">Atualizar</b-button>
        </b-form>

    </div>

</template>

<script>

    import {BForm,BFormGroup,BFormInput,BFormTextarea} from 'bootstrap-vue'
    import {BButton,BFormSelect} from 'bootstrap-vue'
    import {BCard} from 'bootstrap-vue'

    export default {
        data() {
            return {
                task: {}
            }
        },
        created() {
            axios.get(`/api/tasks/${this.$route.params.id}`)
                .then((response) => {
                    this.task = response.data;
                    // console.log(response.data);
                });
        },
        methods: {
            updateTask() {
                axios.put(`/api/tasks/${this.$route.params.id}`, this.task)
                    .then((response) => {
                        console.log(response);
                        this.$router.push({name: 'tasks'});
                    });
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
