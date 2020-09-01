<template>
    <div class="popover" ref="popover">
        <div class="contentWrapper" v-if="visible" ref="contentWrapper"
             :class="position && `position-${position}`">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "PFPopover",
        data() {
            return {
                visible: false
            };
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'left', 'right', 'bottom'].indexOf(value) >= 0;
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0;
                }
            }
        },
        mounted() {
            if(this.trigger === 'click'){
                this.$refs.popover.addEventListener('click',this.onClick)
            }else{
                this.$refs.popover.addEventListener('mouseenter',this.open)
                this.$refs.popover.addEventListener('mouseleave',this.close)
            }
        },
        destroyed() {
            if(this.trigger === 'click'){
                this.$refs.popover.removeEventListener('click',this.onClick)
            }else{
                this.$refs.popover.removeEventListener('mouseenter',this.open)
                this.$refs.popover.removeEventListener('mouseleave',this.close)
            }
        },
        methods: {
            onDocumentClick(e) {
                if (this.$refs.popover.contains(e.target)
                    || this.$refs.contentWrapper.contains(e.target)) {
                    return;
                }
                this.visible = false;
                document.removeEventListener('click', this.onDocumentClick);
            },
            positionContent() {
                const position = this.position;
                const contentWrapper = this.$refs.contentWrapper;
                const {top, left, height, width} = this.$refs.popover.getBoundingClientRect();
                document.body.appendChild(contentWrapper);
                const {height: contentHeight} = contentWrapper.getBoundingClientRect();
                const positions = {
                    top: {
                        top: top + window.scrollY + 'px',
                        left: left + window.scrollX + 'px',
                    },
                    bottom: {
                        top: top + window.scrollY + height + 'px',
                        left: left + window.scrollX + 'px'
                    },
                    left: {
                        top: top + window.scrollY + (height - contentHeight) / 2 + 'px',
                        left: left + window.scrollX + 'px'
                    },
                    right: {
                        top: top + window.scrollY - (contentHeight - height) / 2 + 'px',
                        left: left + window.scrollX + width + 'px'
                    }
                };
                contentWrapper.style.top = positions[this.position].top
                contentWrapper.style.left = positions[this.position].left
            },
            open() {
                this.visible = true;
                this.$nextTick(() => {
                    this.positionContent();
                    document.addEventListener('click', this.onDocumentClick);
                });
            },
            close() {
                this.visible = false;
                document.removeEventListener('click', this.onDocumentClick);
            },
            onClick(e) {
                if (this.visible) {
                    this.close();
                } else {
                    this.open();
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
    }

    .contentWrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: white;
        padding: 0.5em 1em;
        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            position: absolute;
        }

        &.position-top {
            margin-top: -10px;
            transform: translateY(-100%);

            &::before {
                left: 10px;
                border-top: 10px solid $border-color;
                top: 100%;
            }

            &::after {
                left: 10px;
                border-top: 10px solid white;
                top: calc(100% - 1px);
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before {
                border-bottom: 10px solid $border-color;
                top: 0;
                transform: translateY(-100%);
            }

            &::after {
                border-bottom: 10px solid white;
                top: 0;
                transform: translateY(calc(-100% + 1px));
            }
        }

        &.position-left {
            margin-left: -10px;
            transform: translateX(-100%);

            &::before {
                border-left: 10px solid $border-color;
                top: 50%;
                left: 100%;
                transform: translateY(-50%);
            }

            &::after {
                border-left: 10px solid white;
                top: 50%;
                left: calc(100% - 1px);
                transform: translateY(-50%);
            }
        }

        &.position-right {
            margin-left: 10px;

            &::before {
                border-right: 10px solid $border-color;
                top: 50%;
                right: 100%;
                transform: translateY(-50%);
            }

            &::after {
                border-right: 10px solid white;
                top: 50%;
                right: calc(100% - 1px);
                transform: translateY(-50%);
            }
        }

    }
</style>
