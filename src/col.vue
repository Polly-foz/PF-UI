<template>
    <div class="col" :class="colClass"
         :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    const validator = (value) => {
        const keys = Object.keys(value);
        let valid = true;
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                valid = false;
            }
        });
        return valid;
    };
    export default {
        name: "PFCol",
        data() {
            return {
                gutter: 0,
            };
        },
        props: {
            span: {type: [Number, String]},
            offset: {type: [Number, String]},
            pad: {type: Object, validator},
            narrowPc: {type: Object, validator},
            pc: {type: Object, validator},
            widePc: {type: Object, validator}
        },
        methods: {
            createClasses: (propsObject, devicePrefix = '') => {
                if (!propsObject) {
                    return [];
                }
                const {span, offset} = propsObject;
                let arr = [];
                if (span) {
                    arr.push(`span-${devicePrefix}${span}`);
                }
                if (offset) {
                    arr.push(`offset-${devicePrefix}${offset}`);
                }
                return arr;
            }
        },
        computed: {
            colClass() {
                const {span, offset, pad, narrowPc, pc, widePc, createClasses} = this;
                return [
                    ...createClasses({span, offset}),
                    ...createClasses(pad, 'pad-'),
                    ...createClasses(narrowPc, 'narrowPc-'),
                    ...createClasses(pc, 'pc-'),
                    ...createClasses(widePc, 'widePc-')
                ];
            },
            colStyle() {
                return {paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'};
            }
        }
    };
</script>

<style lang="scss" scoped>
    .col {
        $class-prefix: span-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }

        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }

        @media (min-width: 577px) {
            $class-prefix: span-pad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: offset-pad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }

        @media (min-width: 769px) {
            $class-prefix: span-narrowPc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: offset-narrowPc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }

        @media (min-width: 993px) {
            $class-prefix: span-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }

        @media (min-width: 1201px) {
            $class-prefix: span-widePc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-prefix: offset-widePc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
    }


</style>
