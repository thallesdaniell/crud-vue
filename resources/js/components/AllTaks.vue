<template>
    <div>
        <b-table
            :striped="striped"
            :bordered="bordered"
            :borderless="borderless"
            :outlined="outlined"
            :small="small"
            :hover="hover"
            :dark="dark"
            :fixed="fixed"
            :foot-clone="footClone"
            :no-border-collapse="noCollapse"
            id="my-table"
            :items="tasks"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
            :sort-direction="sortDirection"

        >
            <template v-slot:cell(updated_at)="row" class="text-right">
                <b-button size="sm" @click="row.toggleDetails" class="mr-2" variant="warning">
                    Detalhar
                </b-button>

                <router-link :to="{name: 'edit', params: { id: row.item.id }}" class="btn-sm btn btn-primary">
                    Editar
                </router-link>

                <b-button size="sm" @click="deleteTask(row.item.id)" class="mr-2" variant="danger">
                    Deletar
                </b-button>
            </template>

            <template v-slot:row-details="row">
                <b-card>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Titulo:</b></b-col>
                        <b-col>{{ row.item.name }}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Descriçao:</b></b-col>
                        <b-col>{{ row.item.description }}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Criado em:</b></b-col>
                        <b-col>{{ row.item.created_at }}</b-col>
                    </b-row>

                    <b-button size="sm" @click="row.toggleDetails">Fechar</b-button>
                </b-card>
            </template>
        </b-table>

        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            pills
        ></b-pagination>
    </div>
</template>

<script>
    import {BPagination, BTable,BButton,BFormCheckbox} from 'bootstrap-vue'
    import {BRow,BCol,BCard} from 'bootstrap-vue'

    export default {
        data() {
            return {

                tasks: [],
                page: 1,
                baseUrl: 'api/tasks',
                perPage: 5,
                currentPage: 1,
                striped: false,
                bordered: false,
                borderless: false,
                outlined: false,
                small: false,
                hover: true,
                dark: false,
                fixed: true,
                footClone: false,
                headVariant: null,
                tableVariant: '',
                noCollapse: false,
                sortDirection: "asc",
                fields: [
                    { key: 'id', label: '#' ,sortable: true,sortDirection: 'asc'},
                    { key: 'name', label: 'Nome',sortable: true },
                    { key: 'updated_at', label:'Ação' }
                ],
            }
        },
        created() {
            axios.get(this.baseUrl)
                .then(response => {
                    this.tasks = response.data;
                });
        },
        methods: {
            deleteTask(id) {
                axios.delete(`api/tasks/${id}`)
                    .then(response => {
                        let i = this.tasks.map(item => item.id).indexOf(id);
                        this.tasks.splice(i, 1)
                    }).catch(response => {
                    console.log(response);
                });
            }
        },
        computed: {
            rows() {
                return this.tasks.length
            }
        },
        components: {
            BPagination,
            BTable,
            BButton,
            BFormCheckbox,
            BRow,
            BCol,
            BCard
        }
    }
</script>
