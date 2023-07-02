import { createSelector } from '@reduxjs/toolkit'

const usersItemsSelector = state => state.users.users
export const filterSelector = state => state.users.filter

export const usersSelector = createSelector(
    [usersItemsSelector, filterSelector],
    (users, filter) => {
        if (!users.items) {
            return users
        }

        const lowercaseFilter = filter.toLowerCase()
        const filteredItems = users.items?.filter(
            user =>
                user.firstName.toLowerCase().includes(lowercaseFilter) ||
                user.phone.replaceAll(' ', '').includes(filter)
        )
        return {
            ...users,
            items: filteredItems || null,
        }
    }
)
