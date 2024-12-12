<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-combobox :items="['Dr. vanuvat', 'Dr. jidayut', 'Dr. riya', 'Dr. phanuphong']"
                    variant="outlined"></v-combobox>
                <v-layout style="height: 100px">
                    <v-system-bar window color="primary">

                        <span>ทันตแพทย</span>

                        <v-spacer></v-spacer>

                        <v-btn class="ms-2" icon="mdi-account" variant="text"></v-btn>
                    </v-system-bar>
                    <v-system-bar window color="success">
                        <v-spacer><v-btn class="ms-2" icon="mdi-calendar-clock" variant="text"></v-btn><span>{{
                                formattedDate }}</span></v-spacer>
                    </v-system-bar>
                </v-layout>
                <v-card>

                    <v-row>
                        <v-col>
                            <v-sheet>
                                <v-calendar @click="handleDayClick()" :events="events" color="primary"></v-calendar>
                                <v-dialog v-model="isModalOpen" max-width="500px">

                                    <v-card class="mx-auto" max-width="400">

                                        <v-toolbar color="transparent">

                                            <v-toolbar-title class="text-h6">jilayut</v-toolbar-title>

                                            <template v-slot:append>
                                                <v-icon class="ms-2" icon="mdi-account" variant="text"></v-icon>
                                                <v-btn @click="closeModal" icon="mdi-close"></v-btn>
                                            </template>
                                        </v-toolbar>


                                        <v-card-text>
                                            <div class="font-weight-bold ms-1 mb-2">ทันตแพทย</div>

                                            <v-timeline align="start" density="compact">
                                                <v-timeline-item v-for="message in messages" :key="message.remark"
                                                    :dot-color="message.color" :icon="message.icon" size="x-small">
                                                    <div class="mb-4">
                                                        <div class="font-weight-normal">
                                                            <strong>{{ message.from }}</strong> @{{ message.remark }}
                                                        </div>
                                                        <div><v-icon color="#9ff6c5" icon="mdi-map-marker"></v-icon>{{ message.message }}</div>
                                                        <div><v-icon color="#9ff6c5" icon="mdi-phone"></v-icon>{{ message.phone }}</div>
                                                        <div>ประเมินค่าใช้จ่าย {{ message.price }}</div>
                                                      
                                                        <v-card-actions>
                                                   <div><v-icon color="#9ff6c5" icon="mdi-timer"></v-icon>{{ message.time }}</div>
                                                    <v-list-item>

                                                        <template v-slot:append>
                                                            <div class="justify-self-end">

                                                                <v-icon color="#9ff6c5" icon="mdi-file"></v-icon>
                                                                <v-avatar size="24" color="#9ff6c5">
                                                                    <v-icon icon="mdi-pen"></v-icon>
                                                                </v-avatar>
                                                            </div>
                                                        </template>
                                                    </v-list-item>
                                                </v-card-actions>
                                                    </div>
                                                </v-timeline-item>
                                            </v-timeline>
                                        </v-card-text>
                                    </v-card>
                                </v-dialog>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-card>

            </v-col>

            <v-col cols="12" md="6">
                <v-card class="mx-auto" height="1000px">
                    <v-layout style="height: 50px">
                        <v-system-bar window>
                            <v-icon class="me-2" icon="mdi-calendar-check"></v-icon>

                            <span>{{ formattedDate }}</span>

                            <v-spacer></v-spacer>

                            <span>ลายได้ทั้งหมด: 0.00 บาท</span>
                            <v-btn class="ms-2" icon="mdi-sync" variant="text"></v-btn>
                        </v-system-bar>
                    </v-layout>
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-card height="1000px" color="#a4e8d8">
                                    <v-layout style="height: 50px">
                                        <v-system-bar window color="#24cec0">
                                            <v-spacer></v-spacer>
                                            <span>ห้องพิเศษ present (0)</span>
                                        </v-system-bar>
                                    </v-layout>
                                </v-card>


                            </v-col><v-col cols="12" md="4">
                                <v-card height="1000px" color="#a4e8d8">
                                    <v-layout style="height: 50px">
                                        <v-system-bar window color="#24cec0">
                                            <v-spacer></v-spacer>
                                            <span>admin (1)</span>
                                        </v-system-bar>
                                    </v-layout>
                                    <v-row align="center" justify="center" dense>
                                        <v-col>
                                            <v-card subtitle="45483323" title="jilayut">
                                                <template v-slot:prepend>
                                                    <v-avatar size="24" color="blue-darken-2">
                                                        <v-icon icon="mdi-account"></v-icon>
                                                    </v-avatar>
                                                </template>
                                                <template v-slot:append>
                                                    <v-badge color="info" content="05" inline></v-badge>
                                                </template>

                                                <v-card-actions>
                                                    <v-card-text>9วัน</v-card-text>
                                                    <v-list-item>

                                                        <template v-slot:append>
                                                            <div class="justify-self-end">

                                                                <v-icon icon="mdi-share-variant"></v-icon>
                                                                <v-avatar size="24" color="red-darken-2">
                                                                    <v-icon icon="mdi-minus-circle-outline"></v-icon>
                                                                </v-avatar>
                                                            </div>
                                                        </template>
                                                    </v-list-item>
                                                </v-card-actions>

                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-card>


                            </v-col><v-col cols="12" md="4">
                                <v-card height="1000px" color="#9ff6c5">
                                    <v-layout style="height: 50px">
                                        <v-system-bar window color="#24cec0">
                                            <v-spacer></v-spacer>
                                            <span>จุดชำระเงิน (1)</span>
                                        </v-system-bar>
                                    </v-layout>
                                    <v-row align="center" justify="center" dense>
                                        <v-col>
                                            <v-card subtitle="45483323" title="jilayut">
                                                <template v-slot:prepend>
                                                    <v-avatar size="24" color="blue-darken-2">
                                                        <v-icon icon="mdi-account"></v-icon>
                                                    </v-avatar>
                                                </template>
                                                <template v-slot:append>
                                                    <v-badge color="info" content="05" inline></v-badge>
                                                </template>

                                                <v-card-actions>
                                                    <v-card-text>9วัน</v-card-text>
                                                    <v-list-item>

                                                        <template v-slot:append>
                                                            <div class="justify-self-end">

                                                                <v-icon icon="mdi-share-variant"></v-icon>
                                                                <v-avatar size="24" color="red-darken-2">
                                                                    <v-icon icon="mdi-minus-circle-outline"></v-icon>
                                                                </v-avatar>
                                                            </div>
                                                        </template>
                                                    </v-list-item>
                                                </v-card-actions>

                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-card>

                            </v-col>
                        </v-row>
                    </v-container>

                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>
<script setup>
import { ref } from 'vue';
import { formatDateThai } from '~/utils/dateFormatter.js';
const isModalOpen = ref(false);
const currentDate = new Date();
const formattedDate = ref(formatDateThai(currentDate));
const events = ref([{ title: 'jilayut', start: new Date('2024-12-12T09:00:00'), end: new Date('2024-12-12T10:00:00') }]);
const messages = ref([{
    from: '458348',
    message: `บริการ`,
    remark: 'ป่วย',
    color: 'deep-purple-lighten-1',
    icon: 'mdi-account',
    phone: '4593934302',
    time: '18:00-17:00',
    price: '1500'
},
])
const handleDayClick = () => {
    isModalOpen.value = !isModalOpen.value;
};
const closeModal = () => { isModalOpen.value = false; };
</script>
