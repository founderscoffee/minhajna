/*
 * SPDX-FileCopyrightText: 2026 The Minhajna contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * The NDK's start-up code carries the name of the compiler that built it,
 * which differs between the NDK for macOS and the NDK for Linux, and the
 * linker adds its own name. Without these names, the same source gives the
 * same native libraries on both systems. The rest of the linker's default
 * layout is unchanged.
 */
SECTIONS { /DISCARD/ : { *(.comment) } } INSERT AFTER .bss;
